import { Canvas, ReactThreeFiber } from "@react-three/fiber";
import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import css from "./style";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

function Floor(props: any) {
  return (
    <mesh {...props} recieveShadow={true}>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color="white" />
    </mesh>
  );
}

function Box(props: any) {
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxBufferGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}

function LightBulb(props: any) {
  return (
    <mesh {...props}>
      <pointLight castShadow />
      <sphereBufferGeometry args={[0.2, 30, 10]} />
      <meshPhongMaterial emissive={"yellow"} />
    </mesh>
  );
}

const CameraControls = () => {
  extend({ OrbitControls });
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  // const controls = useRef();
  // useFrame((state) => controls?.current?.update());
  return <orbitControls args={[camera, domElement]} />;
};

const Life = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <Canvas
          shadows={true}
          // className={`{background: "black"}`}
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <ambientLight color={"white"} intensity={0.3} />
          <LightBulb position={[0, 3, 0]} />
          <Box rotateX={3} rotateY={0.2} />
          <CameraControls />
          <Floor />
        </Canvas>
      </div>
    </>
  );
};
export default Life;
