"use client"

import { useState } from "react"
import { 
  Heart, 
  Utensils, 
  Stethoscope, 
  MessageCircle, 
  Users, 
  MapPin, 
  Activity,
  ShoppingBag,
  Plus,
  Bell,
  Camera,
  Calendar,
  Award,
  TrendingUp,
  Sparkles,
  ChevronRight,
  Dog,
  Cat,
  Pill,
  Scale,
  Clock,
  BookOpen,
  Video
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PetCareApp() {
  const [selectedPet, setSelectedPet] = useState("luna")

  // Dados mockados dos pets
  const pets = [
    {
      id: "luna",
      name: "Luna",
      type: "dog",
      breed: "SRD (Vira-lata)",
      age: "3 anos",
      weight: "12kg",
      photo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop",
      wellnessScore: 85
    },
    {
      id: "mimi",
      name: "Mimi",
      type: "cat",
      breed: "SRD (Vira-lata)",
      age: "2 anos",
      weight: "4kg",
      photo: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
      wellnessScore: 92
    }
  ]

  const currentPet = pets.find(p => p.id === selectedPet) || pets[0]

  // Lembretes do dia
  const todayReminders = [
    { icon: Utensils, text: "Refeição da tarde", time: "15:00", color: "text-emerald-600" },
    { icon: Pill, text: "Medicação antiparasitária", time: "18:00", color: "text-blue-600" },
    { icon: Calendar, text: "Consulta veterinária", time: "Amanhã 10h", color: "text-purple-600" }
  ]

  // Missão do dia
  const dailyMission = {
    title: "Treinamento de Obediência",
    description: "Pratique 'sentar' e 'ficar' por 10 minutos",
    progress: 60,
    points: 50
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-2xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  PetCare
                </h1>
                <p className="text-xs text-gray-500">Cuidado completo para seu melhor amigo</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                <Plus className="w-4 h-4 mr-2" />
                Adicionar Pet
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Seletor de Pets */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {pets.map((pet) => (
            <button
              key={pet.id}
              onClick={() => setSelectedPet(pet.id)}
              className={`flex-shrink-0 flex items-center gap-3 p-4 rounded-2xl transition-all ${
                selectedPet === pet.id
                  ? "bg-white shadow-lg ring-2 ring-emerald-400"
                  : "bg-white/60 hover:bg-white/80"
              }`}
            >
              <Avatar className="w-16 h-16 ring-2 ring-white">
                <AvatarImage src={pet.photo} alt={pet.name} />
                <AvatarFallback>{pet.name[0]}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{pet.name}</h3>
                  {pet.type === "dog" ? (
                    <Dog className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Cat className="w-4 h-4 text-teal-600" />
                  )}
                </div>
                <p className="text-sm text-gray-500">{pet.breed}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span className="text-xs font-medium text-amber-600">
                    Bem-estar: {pet.wellnessScore}%
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Dashboard Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Coluna Esquerda - Resumo e Lembretes */}
          <div className="lg:col-span-2 space-y-6">
            {/* Missão do Dia */}
            <Card className="bg-gradient-to-br from-purple-500 to-pink-500 text-white border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <CardTitle className="text-white">Missão do Dia</CardTitle>
                  </div>
                  <Badge className="bg-white/20 text-white border-0">
                    +{dailyMission.points} pontos
                  </Badge>
                </div>
                <CardDescription className="text-purple-100">
                  {dailyMission.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3 text-purple-50">{dailyMission.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progresso</span>
                    <span className="font-semibold">{dailyMission.progress}%</span>
                  </div>
                  <Progress value={dailyMission.progress} className="bg-white/20" />
                </div>
              </CardContent>
            </Card>

            {/* Lembretes de Hoje */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <CardTitle>Lembretes de Hoje</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {todayReminders.map((reminder, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className={`p-2 rounded-lg bg-white ${reminder.color}`}>
                      <reminder.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{reminder.text}</p>
                      <p className="text-sm text-gray-500">{reminder.time}</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Gráfico de Bem-Estar */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <CardTitle>Evolução do Bem-Estar</CardTitle>
                </div>
                <CardDescription>Últimos 7 dias</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 flex items-end justify-between gap-2">
                  {[75, 80, 78, 85, 88, 85, 92].map((value, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div
                        className="w-full bg-gradient-to-t from-emerald-400 to-teal-400 rounded-t-lg transition-all hover:from-emerald-500 hover:to-teal-500"
                        style={{ height: `${value}%` }}
                      ></div>
                      <span className="text-xs text-gray-500">
                        {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"][idx]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Coluna Direita - Informações do Pet */}
          <div className="space-y-6">
            {/* Card do Pet */}
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-emerald-400 to-teal-500"></div>
              <CardContent className="pt-0">
                <div className="flex flex-col items-center -mt-16">
                  <Avatar className="w-28 h-28 ring-4 ring-white">
                    <AvatarImage src={currentPet.photo} alt={currentPet.name} />
                    <AvatarFallback>{currentPet.name[0]}</AvatarFallback>
                  </Avatar>
                  <h2 className="text-2xl font-bold mt-3">{currentPet.name}</h2>
                  <p className="text-gray-500">{currentPet.breed}</p>
                  
                  <div className="w-full mt-6 space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Idade</span>
                      <span className="font-semibold">{currentPet.age}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Peso</span>
                      <span className="font-semibold">{currentPet.weight}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">Bem-estar</span>
                      <div className="flex items-center gap-2">
                        <Progress value={currentPet.wellnessScore} className="w-20" />
                        <span className="font-semibold text-emerald-600">
                          {currentPet.wellnessScore}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600">
                    Ver Perfil Completo
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Ações Rápidas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Camera className="w-4 h-4 mr-3" />
                  Analisar Comportamento
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Video className="w-4 h-4 mr-3" />
                  Consulta Veterinária
                </Button>
                <Button variant="outline" className="w-full justify-start" size="lg">
                  <Scale className="w-4 h-4 mr-3" />
                  Registrar Peso
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navegação Principal por Funcionalidades */}
        <Tabs defaultValue="nutrition" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-7 gap-2 bg-white/60 p-2 rounded-2xl">
            <TabsTrigger value="nutrition" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
              <Utensils className="w-4 h-4 mr-2" />
              Nutrição
            </TabsTrigger>
            <TabsTrigger value="health" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              <Stethoscope className="w-4 h-4 mr-2" />
              Saúde
            </TabsTrigger>
            <TabsTrigger value="behavior" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              Comportamento
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Activity className="w-4 h-4 mr-2" />
              Atividade
            </TabsTrigger>
            <TabsTrigger value="community" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Comunidade
            </TabsTrigger>
            <TabsTrigger value="map" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white">
              <MapPin className="w-4 h-4 mr-2" />
              Mapa
            </TabsTrigger>
            <TabsTrigger value="shop" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Loja
            </TabsTrigger>
          </TabsList>

          {/* Nutrição */}
          <TabsContent value="nutrition" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Utensils className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">Plano Alimentar</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Recomendações personalizadas baseadas no perfil de {currentPet.name}
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Café da manhã</span>
                      <span className="font-medium">150g ração premium</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Almoço</span>
                      <span className="font-medium">200g alimentação natural</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Jantar</span>
                      <span className="font-medium">150g ração premium</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Cardápio Completo
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Camera className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Scanner de Rótulos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Fotografe o rótulo e receba análise nutricional instantânea
                  </p>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 mb-4 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-blue-300" />
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    <Camera className="w-4 h-4 mr-2" />
                    Escanear Rótulo
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Comparar Rações</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Compare marcas por qualidade, reputação e preço
                  </p>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Ração Premium A</span>
                      <Badge className="bg-emerald-500">9.5/10</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Ração Premium B</span>
                      <Badge className="bg-emerald-500">9.2/10</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium">Ração Standard C</span>
                      <Badge className="bg-amber-500">7.8/10</Badge>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Comparação Completa
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Saúde */}
          <TabsContent value="health" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Pill className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Cartão de Vacinação</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Acompanhe todas as vacinas e reforços
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between p-2 bg-emerald-50 rounded-lg">
                      <span className="text-sm">V10</span>
                      <Badge className="bg-emerald-500">Em dia</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-emerald-50 rounded-lg">
                      <span className="text-sm">Antirrábica</span>
                      <Badge className="bg-emerald-500">Em dia</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-amber-50 rounded-lg">
                      <span className="text-sm">Gripe Canina</span>
                      <Badge className="bg-amber-500">Vence em 15 dias</Badge>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Cartão Completo
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Agenda de Cuidados</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Consultas, banho, tosa e medicações
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Consulta Veterinária</span>
                        <span className="text-xs text-gray-500">Amanhã</span>
                      </div>
                      <p className="text-xs text-gray-600">Dr. Carlos - 10:00</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Banho e Tosa</span>
                        <span className="text-xs text-gray-500">Sábado</span>
                      </div>
                      <p className="text-xs text-gray-600">Pet Shop Central - 14:00</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Agendar Novo
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-teal-100 rounded-lg">
                      <Video className="w-5 h-5 text-teal-600" />
                    </div>
                    <CardTitle className="text-lg">Teleorientação Vet</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Veterinários disponíveis 24h para consulta online
                  </p>
                  <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 mb-4 text-center">
                    <Video className="w-12 h-12 text-teal-400 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">3 veterinários online</p>
                  </div>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600">
                    <Video className="w-4 h-4 mr-2" />
                    Iniciar Consulta
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-pink-100 rounded-lg">
                      <BookOpen className="w-5 h-5 text-pink-600" />
                    </div>
                    <CardTitle className="text-lg">Diário de Saúde</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Registre sintomas, comportamentos e observações
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Hoje, 14:30</p>
                      <p className="text-sm">Mais animado após o passeio</p>
                    </div>
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">Ontem, 18:00</p>
                      <p className="text-sm">Comeu toda a refeição</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Plus className="w-4 h-4 mr-2" />
                    Nova Entrada
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Sparkles className="w-5 h-5 text-amber-600" />
                    </div>
                    <CardTitle className="text-lg">Assistente IA</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Tire dúvidas sobre saúde, nutrição e comportamento
                  </p>
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-700 mb-2">
                      💬 "Meu cachorro está com tosse, o que pode ser?"
                    </p>
                    <p className="text-xs text-gray-600">
                      Resposta instantânea baseada em IA veterinária
                    </p>
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Conversar com IA
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">Gráficos de Saúde</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Acompanhe peso, atividade e indicadores
                  </p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Peso ideal</span>
                        <span className="font-medium text-emerald-600">12kg ✓</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Atividade diária</span>
                        <span className="font-medium text-blue-600">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Todos os Gráficos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Comportamento */}
          <TabsContent value="behavior" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Camera className="w-5 h-5 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">Análise por Câmera</CardTitle>
                  </div>
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                    Premium
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    IA analisa expressão corporal e infere estado emocional
                  </p>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-4 flex items-center justify-center">
                    <Camera className="w-16 h-16 text-purple-300" />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Camera className="w-4 h-4 mr-2" />
                    Analisar Agora
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Biblioteca de Sinais</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Aprenda a interpretar posturas, latidos e comportamentos
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium mb-1">🐕 Cauda entre as pernas</p>
                      <p className="text-xs text-gray-600">Medo ou submissão</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium mb-1">🐕 Orelhas para trás</p>
                      <p className="text-xs text-gray-600">Ansiedade ou desconforto</p>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Biblioteca Completa
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Award className="w-5 h-5 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">Treinos Gamificados</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Programas de treinamento com missões e recompensas
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="p-3 bg-emerald-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Obediência Básica</span>
                        <Badge className="bg-emerald-500">Nível 3</Badge>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">Ansiedade de Separação</span>
                        <Badge variant="outline">Nível 1</Badge>
                      </div>
                      <Progress value={20} className="h-2" />
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Todos os Treinos
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Atividade */}
          <TabsContent value="activity" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Activity className="w-5 h-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">Monitor de Atividade</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Acompanhe passos, sono e brincadeiras
                  </p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Passos hoje</span>
                        <span className="font-semibold">8.500 / 10.000</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Tempo de sono</span>
                        <span className="font-semibold">12h / 14h</span>
                      </div>
                      <Progress value={86} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Brincadeiras</span>
                        <span className="font-semibold">3 / 4 sessões</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Ver Histórico Completo
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow col-span-1 md:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">Relatório Mensal de Bem-Estar</CardTitle>
                  </div>
                  <CardDescription>Dezembro 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-emerald-50 rounded-xl">
                      <p className="text-3xl font-bold text-emerald-600 mb-1">92%</p>
                      <p className="text-xs text-gray-600">Bem-estar Geral</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <p className="text-3xl font-bold text-blue-600 mb-1">28</p>
                      <p className="text-xs text-gray-600">Dias Ativos</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <p className="text-3xl font-bold text-purple-600 mb-1">15</p>
                      <p className="text-xs text-gray-600">Treinos Completos</p>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-xl">
                      <p className="text-3xl font-bold text-amber-600 mb-1">850</p>
                      <p className="text-xs text-gray-600">Pontos Ganhos</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Comunidade */}
          <TabsContent value="community" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-pink-100 rounded-lg">
                      <Users className="w-5 h-5 text-pink-600" />
                    </div>
                    <CardTitle>Feed da Comunidade</CardTitle>
                  </div>
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Nova Postagem
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Post 1 */}
                <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">Maria Clara</p>
                      <p className="text-xs text-gray-500">há 2 horas</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">
                    Meu Thor completou 1 ano hoje! 🎉 Esse vira-lata mudou minha vida completamente. 
                    Obrigada a todos da comunidade pelas dicas de treinamento! ❤️
                  </p>
                  <img 
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&h=400&fit=crop" 
                    alt="Thor" 
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <button className="flex items-center gap-1 hover:text-pink-600">
                      <Heart className="w-4 h-4" />
                      <span>124</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600">
                      <MessageCircle className="w-4 h-4" />
                      <span>18</span>
                    </button>
                  </div>
                </div>

                {/* Post 2 */}
                <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" />
                      <AvatarFallback>RC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">Ricardo Costa</p>
                      <p className="text-xs text-gray-500">há 5 horas</p>
                    </div>
                  </div>
                  <p className="text-sm mb-3">
                    Alguém tem dicas para ansiedade de separação? Minha Nina fica muito estressada 
                    quando saio de casa 😢
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <button className="flex items-center gap-1 hover:text-pink-600">
                      <Heart className="w-4 h-4" />
                      <span>45</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-blue-600">
                      <MessageCircle className="w-4 h-4" />
                      <span>32</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Mapa */}
          <TabsContent value="map" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-teal-100 rounded-lg">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <CardTitle>Locais Pet Friendly</CardTitle>
                </div>
                <CardDescription>Veterinários, pet shops, parques e hotéis próximos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-12 mb-4 flex items-center justify-center">
                  <MapPin className="w-24 h-24 text-teal-300" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                  <Button variant="outline" size="sm">
                    🏥 Veterinários
                  </Button>
                  <Button variant="outline" size="sm">
                    🛍️ Pet Shops
                  </Button>
                  <Button variant="outline" size="sm">
                    🌳 Parques
                  </Button>
                  <Button variant="outline" size="sm">
                    🏨 Hotéis Pet
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Clínica Veterinária Amigo Fiel</p>
                      <p className="text-xs text-gray-500">0.8 km • Aberto até 18h</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-sm">Pet Shop Central</p>
                      <p className="text-xs text-gray-500">1.2 km • Aberto até 20h</p>
                    </div>
                    <Button size="sm" variant="ghost">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Loja */}
          <TabsContent value="shop" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="bg-gray-100 rounded-lg h-40 mb-3 flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-gray-300" />
                  </div>
                  <h3 className="font-semibold mb-1">Ração Premium Cães</h3>
                  <p className="text-sm text-gray-600 mb-2">15kg - Sabor Frango</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">R$ 189,90</span>
                    <Button size="sm">Comprar</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="bg-gray-100 rounded-lg h-40 mb-3 flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-gray-300" />
                  </div>
                  <h3 className="font-semibold mb-1">Petiscos Naturais</h3>
                  <p className="text-sm text-gray-600 mb-2">Mix 500g</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">R$ 45,90</span>
                    <Button size="sm">Comprar</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 mb-2">
                    Premium
                  </Badge>
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg h-40 mb-3 flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-1">Plano Premium</h3>
                  <p className="text-sm text-gray-600 mb-2">Acesso total ao app</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-purple-600">R$ 29,90/mês</span>
                    <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500">
                      Assinar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="bg-gray-100 rounded-lg h-40 mb-3 flex items-center justify-center">
                    <ShoppingBag className="w-16 h-16 text-gray-300" />
                  </div>
                  <h3 className="font-semibold mb-1">Brinquedo Interativo</h3>
                  <p className="text-sm text-gray-600 mb-2">Estimulação mental</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">R$ 79,90</span>
                    <Button size="sm">Comprar</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-emerald-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">🐾 Feito com amor para tutores de vira-latas e pets SRD</p>
            <p className="text-xs text-gray-500">
              PetCare © 2024 - Cuidado completo para seu melhor amigo
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
