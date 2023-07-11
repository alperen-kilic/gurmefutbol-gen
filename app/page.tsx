import Image from "next/image";
import FormInput from "./components/FormInput";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormInput />
    </main>
  );
}
