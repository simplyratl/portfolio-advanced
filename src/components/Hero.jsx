import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import {
  Html,
  Icosahedron,
  MeshDistortMaterial,
  OrbitControls,
  Stars,
  useCubeTexture,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

export const Light = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0,
  });

  useFrame((pointer) => {
    setMousePos({
      x: pointer.mouse.x,
      y: pointer.mouse.y,
    });
  }, []);

  return <pointLight position={[mousePos.x * 12, mousePos.y * 12, 2]} angle={0.4} intensity={0.3} />;
};

const Hero = () => {
  const MainSphere = ({ material }) => {
    const main = useRef();

    // useFrame(({ clock, mouse }) => {
    //   main.current.rotation.z = clock.getElapsedTime();
    //   main.current.rotation.y = THREE.MathUtils.lerp(main.current.rotation.y, mouse.x * Math.PI, 0.1);
    //   main.current.rotation.x = THREE.MathUtils.lerp(main.current.rotation.x, mouse.y * Math.PI, 0.1);
    // });

    return <Icosahedron args={[1, 4]} ref={main} material={material} position={[0, 0, 0]} />;
  };

  function Instances({ material }) {
    // we use this array ref to store the spheres after creating them
    const [sphereRefs] = useState(() => []);
    // we use this array to initialize the background spheres
    const initialPositions = [
      [-4, 20, -12],
      [-10, 12, -4],
      [-11, -12, -23],
      [-16, -6, -10],
      [12, -2, -3],
      [13, 4, -12],
      [14, -2, -23],
      [8, 10, -20],
    ];
    // smaller spheres movement
    useFrame(() => {
      // animate each sphere in the array
      sphereRefs.forEach((el) => {
        el.position.y += 0.02;
        if (el.position.y > 19) el.position.y = -18;
        el.rotation.x += 0.06;
        el.rotation.y += 0.06;
        el.rotation.z += 0.02;
      });
    });
    return (
      <>
        <MainSphere material={material} />
        {initialPositions.map((pos, i) => (
          <Icosahedron
            args={[1, 4]}
            position={[pos[0], pos[1], pos[2]]}
            material={material}
            key={i}
            ref={(ref) => (sphereRefs[i] = ref)}
          />
        ))}
      </>
    );
  }

  function Rig({ children }) {
    const ref = useRef();
    const vec = new THREE.Vector3();
    const { camera, mouse } = useThree();
    useFrame(() => {
      camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05);
      ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);
      ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1);
    });
    return <group ref={ref}>{children}</group>;
  }

  const Scene = () => {
    const normalMap = useTexture("/model/normal-map.png");
    const envMap = useCubeTexture(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"], {
      path: "/model/reflections/",
    });

    const [material, set] = useState();

    return (
      <>
        <MeshDistortMaterial
          ref={set}
          envMap={envMap}
          bumpMap={normalMap}
          color={"#181818"}
          roughness={0.1}
          metalness={1}
          bumpScale={0.005}
          clearcoat={1}
          clearcoatRoughness={1}
          radius={1}
          distort={0.4}
        />
        {material && <MainSphere material={material} />}
      </>
    );
  };

  return (
    <section className="h-[100vh]">
      <Canvas
        legacy
        camera={{ position: [0, 0, 3] }}
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
      >
        <color attach="background" args={["#181818"]} />
        <fog color="#161616" attach="fog" near={8} far={30} />

        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />

        <Suspense fallback={<Html center>Loading.</Html>}>
          <Rig>
            <Scene />
          </Rig>
        </Suspense>

        <EffectComposer multisampling={0} disableNormalPass={true} background={false}>
          <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
        </EffectComposer>
      </Canvas>
    </section>
  );
};

export default Hero;
