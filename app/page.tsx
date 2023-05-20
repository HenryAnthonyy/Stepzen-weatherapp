// "use client"

import CityPicker from "@/components/CityPicker";
import { Card, Text, Subtitle, Divider } from "@tremor/react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--bg-gradient)] to-[var(--bg-gradient-darker)] p-10 flex flex-col justify-center items-center">
      <Card className="max-w-3xl mx-auto">
        <Text className="text-6xl font-bold text-center mb-10">Weather AI</Text>
        <Subtitle className="text-xl text-center">
          Powered by OpenAI, Next.js, Tailwind CSS, Tremor 2.0 + More!
        </Subtitle>

        <Divider className="my-10"></Divider>

        <Card className="bg-gradient-to-br from-[var(--bg-gradient)] to-[var(--bg-gradient-darker)]">
          {/* city picker component */}
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
