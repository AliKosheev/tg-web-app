import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function WelcomeCard() {
  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-br from-[#f0f4ff] to-[#dbeafe] p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardContent className="p-6 text-center space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">Добро пожаловать!</h1>
          <p className="text-gray-600">Здесь будет доступна информация о поездках.</p>
          <Button className="w-full" onClick={() => window.Telegram?.WebApp?.close()}>
            Закрыть WebApp
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}