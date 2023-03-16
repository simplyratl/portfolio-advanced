import React, { Suspense, useContext, useRef, useState } from "react";
import Lotie from "lottie-react";
import scrollAnimation from "../assets/lottie/scroll.json";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
	EffectComposer,
	DepthOfField,
	Bloom,
	Noise,
	Vignette,
} from "@react-three/postprocessing";
import {
	CameraShake,
	Html,
	Icosahedron,
	MeshDistortMaterial,
	MeshReflectorMaterial,
	OrbitControls,
	Stars,
	useCubeTexture,
	useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import Navbar from "./Navbar";
import { LightModeContext } from "../context/lightModeContext/LightModeContext";

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

	return (
		<pointLight
			position={[mousePos.x * 12, mousePos.y * 12, 2]}
			angle={0.4}
			intensity={0.3}
		/>
	);
};

const Hero = () => {
	const { lightMode } = useContext(LightModeContext);
	const [effects, enableEffects] = useState(false);
	const [disableEffects, handleDisableEffects] = useState(false);

	const generateTextName = (name) => {
		const arrayName = name.split("");

		return arrayName.map((letter, index) => (
			<span key={index} className="letter">
				{letter}
			</span>
		));
	};

	const MainSphere = ({ material }) => {
		const main = useRef();

		// main sphere rotates following the mouse position
		useFrame(({ clock, mouse }) => {
			if (disableEffects) return;

			main.current.rotation.z = clock.getElapsedTime();
			main.current.rotation.y = THREE.MathUtils.lerp(
				main.current.rotation.y,
				mouse.x * Math.PI,
				0.1
			);
			main.current.rotation.x = THREE.MathUtils.lerp(
				main.current.rotation.x,
				mouse.y * Math.PI,
				0.1
			);
		});

		return (
			<Icosahedron
				args={[1, 4]}
				ref={main}
				material={material}
				position={[0, 0, 0]}
				toneMapped={false}
			/>
		);
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

			if (disableEffects) return;

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
			if (disableEffects) return;

			camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05);
			ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0.2), 0.1);
			ref.current.rotation.y = THREE.MathUtils.lerp(
				ref.current.rotation.y,
				(-mouse.x * Math.PI) / 18,
				0.1
			);
		});
		return <group ref={ref}>{children}</group>;
	}

	function Ground(props) {
		const [floor, normal] = useTexture([
			"/model/reflections/surface_reflection.png",
			"/model/reflections/surface_reflection_2.png",
		]);
		return (
			<mesh
				rotation={[-Math.PI / 2, 0, Math.PI / 2]}
				position={[0, -0.8, 2]}
				scale={20}
			>
				<planeGeometry attach="geometry" args={[8, 8]} />
				<MeshReflectorMaterial
					color="#181818"
					metalness={0}
					mirror={1}
					roughnessMap={floor}
					normalMap={normal}
					normalScale={[2, 2]}
					mixStrength={20}
					resolution={256}
					{...props}
				/>
			</mesh>
		);
	}

	const Scene = () => {
		const normalMap = useTexture("/model/normal-map.png");
		const envMap = useCubeTexture(
			["px.png", "nx-1.png", "py-1.png", "ny.png", "pz.png", "nz-1.png"],
			{
				path: "/model/reflections/",
			}
		);

		const [material, set] = useState();

		return (
			<>
				<MeshDistortMaterial
					ref={set}
					envMap={envMap}
					bumpMap={normalMap}
					color={"#181818"}
					roughness={0.01}
					metalness={1}
					bumpScale={0.005}
					clearcoat={0.4}
					clearcoatRoughness={1}
					radius={1}
					distort={0.5}
				/>
				{material && <Instances material={material} />}
			</>
		);
	};

	return (
		<section className="h-[100vh] relative">
			<Navbar
				effects={effects}
				enableEffects={enableEffects}
				disableEffects={disableEffects}
				handleDisableEffects={handleDisableEffects}
			/>
			<Canvas
				camera={{ position: [0, 0, 3] }}
				legacy={effects ? false : true}
				gl={{
					powerPreference: "high-performance",
					alpha: false,
					antialias: false,
					stencil: false,
					depth: false,
				}}
			>
				<color
					attach="background"
					args={[`${lightMode ? "#fff" : "#181818"}`]}
				/>
				<fog color="#161616" attach="fog" near={8} far={24} />
				<ambientLight />
				<OrbitControls
					enableZoom={false}
					enablePan={false}
					enableRotate={false}
				/>
				<Suspense fallback={<Html center>Loading.</Html>}>
					<Rig>
						<Stars fade count={100} />
						<Scene />
						{effects && <Ground />}
					</Rig>
				</Suspense>
				{effects && (
					<EffectComposer multisampling={0}>
						<DepthOfField focalLength={0.02} bokehScale={2} height={480} />
						<Bloom
							luminanceThreshold={0}
							luminanceSmoothing={0.4}
							intensity={3}
							height={300}
						/>
						<Noise opacity={0.025} />
						<Vignette eskil={false} offset={0.1} darkness={0.6} />
					</EffectComposer>
				)}
				{!disableEffects && (
					<CameraShake
						yawFrequency={0.2}
						pitchFrequency={0.2}
						rollFrequency={0.2}
					/>
				)}
			</Canvas>
			<div className="absolute left-8 translate-y-2/4 select-none inset-y-3/4 lg:inset-y-1/2">
				<div className="text-color font-bold fancy text-6xl lg:text-9xl">
					{generateTextName("Nikica")}
				</div>
				<div className="text-color font-bold fancy text-6xl lg:text-9xl">
					{generateTextName("Ražnatović")}
				</div>
			</div>
			<div className="absolute right-4 bottom-6 w-16 h-16 z-10 pointer-events-none background-white rounded-full">
				<Lotie animationData={scrollAnimation} />
			</div>
			<div className="fade absolute -bottom-8 w-full h-[200px]"></div>
		</section>
	);
};

export default Hero;
