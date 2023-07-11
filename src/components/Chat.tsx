"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import Image from "next/image";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[440px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
      <CardHeader>
        <CardTitle>Keven AI</CardTitle>
        <CardDescription>
          Keven AI is a virtual assistant that helps you to manage your daily
          tasks.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {messages.map((message) => {
          return (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
              {message.role === "user" && (
                <Avatar>
                  <AvatarFallback>KT</AvatarFallback>
                  <AvatarImage src="https://github.com/KevenDev.png" />
                </Avatar>
              )}

              {message.role === "assistant" && (
                <Avatar>
                  <AvatarFallback>AI</AvatarFallback>
                  <AvatarImage src="https://cdn.pixabay.com/photo/2023/01/10/13/31/ai-generated-7709789_960_720.jpg" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "Usuário" : "AI"}:
                </span>
                {message.content}
              </p>
            </div>
          );
        })}
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="w-full flex gap-2">
          <Input
            placeholder="Digite sua mensagem"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
