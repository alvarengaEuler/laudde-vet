'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FileText,
  Users,
  Building2,
  FileCode,
  DollarSign,
  Check,
  X,
  ChevronDown,
  BarChart2,
  Share2,
  Smartphone,
  Zap,
  Shield,
  Clock,
  Award,
} from 'lucide-react'

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <div className="text-xl font-bold text-blue-600">Laudde</div>
            </div>
            <div className="hidden items-center space-x-8 md:flex">
              <a href="#features" className="text-gray-600 transition-colors hover:text-blue-600">
                Funcionalidades
              </a>
              <a href="#pricing" className="text-gray-600 transition-colors hover:text-blue-600">
                Planos
              </a>
              <a href="#faq" className="text-gray-600 transition-colors hover:text-blue-600">
                Perguntas Frequentes
              </a>
              {/* <Link
                href="/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Entrar
              </Link> */}
              <Link
                href="/auth/login"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
              >
                Começar Agora
              </Link>
            </div>
            <div className="flex items-center md:hidden">
              <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-no-repeat"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Laudos veterinários simplificados e profissionais
              </h1>
              <p className="mb-8 text-xl text-blue-100">
                Crie, gerencie e compartilhe laudos de ultrassonografia e raio-x com facilidade.
                Aumente sua produtividade e ofereça resultados de qualidade para clínicas e tutores.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/register"
                  className="rounded-lg bg-white px-6 py-3 text-center font-medium text-blue-600 transition-colors hover:bg-blue-50"
                >
                  Experimente Grátis
                </Link>
                <a
                  href="#features"
                  className="rounded-lg border border-white px-6 py-3 text-center font-medium text-white transition-colors hover:bg-white/10"
                >
                  Conheça os Recursos
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-72 w-72 rounded-full bg-blue-400 opacity-30 mix-blend-multiply blur-2xl filter"></div>
                <div className="absolute -bottom-4 -right-4 h-72 w-72 rounded-full bg-blue-300 opacity-30 mix-blend-multiply blur-2xl filter"></div>
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Dashboard do Laudde"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-4xl font-bold text-blue-600">+5.000</div>
              <p className="text-gray-600">Laudos emitidos</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-4xl font-bold text-blue-600">+200</div>
              <p className="text-gray-600">Veterinários ativos</p>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm">
              <div className="mb-2 text-4xl font-bold text-blue-600">+150</div>
              <p className="text-gray-600">Clínicas parceiras</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Funcionalidades Completas</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Tudo o que você precisa para criar laudos profissionais e gerenciar seu trabalho como
              veterinário especialista em diagnóstico por imagem.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <FileText size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Laudos Personalizáveis</h3>
              <p className="text-gray-600">
                Crie laudos de ultrassonografia e raio-x com modelos personalizáveis para diferentes
                tipos de exames e categorias.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <FileCode size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Modelos de Texto</h3>
              <p className="text-gray-600">
                Biblioteca de modelos de texto para achados e conclusões, organizados por categoria,
                para agilizar a criação de laudos.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                {/* <Image size={24} /> */}
              </div>
              <h3 className="mb-2 text-xl font-semibold">Anexo de Imagens</h3>
              <p className="text-gray-600">
                Anexe imagens de ultrassonografia e raio-x diretamente aos laudos para referência
                visual e compartilhamento.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Users size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Gestão de Pacientes</h3>
              <p className="text-gray-600">
                Cadastre e gerencie pacientes com informações detalhadas, histórico de exames e
                dados dos tutores.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Building2 size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Gestão de Clínicas</h3>
              <p className="text-gray-600">
                Organize as clínicas parceiras, facilitando o envio de laudos e o controle
                financeiro por estabelecimento.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Share2 size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Compartilhamento Fácil</h3>
              <p className="text-gray-600">
                Compartilhe laudos com clínicas e tutores via e-mail ou link público, com acesso
                seguro e rastreável.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <DollarSign size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Gestão Financeira</h3>
              <p className="text-gray-600">
                Controle receitas e despesas, gere relatórios financeiros e acompanhe o lucro por
                período e por clínica.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <BarChart2 size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Dashboard Analítico</h3>
              <p className="text-gray-600">
                Visualize estatísticas de produtividade, receita e pacientes atendidos em um painel
                intuitivo.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                <Smartphone size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Responsivo</h3>
              <p className="text-gray-600">
                Acesse a plataforma de qualquer dispositivo - desktop, tablet ou smartphone - com
                interface adaptativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Como Funciona</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Simplifique seu fluxo de trabalho em apenas alguns passos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Cadastre Pacientes e Clínicas</h3>
              <p className="text-gray-600">
                Adicione os dados dos pacientes e das clínicas parceiras para facilitar a criação de
                laudos.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Crie Laudos Profissionais</h3>
              <p className="text-gray-600">
                Utilize modelos pré-definidos ou crie seus próprios laudos com achados e conclusões
                personalizadas.
              </p>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Compartilhe e Gerencie</h3>
              <p className="text-gray-600">
                Envie os laudos para clínicas e tutores, acompanhe pagamentos e gerencie suas
                finanças.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Planos e Preços</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Escolha o plano ideal para o seu volume de laudos e necessidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Basic Plan */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="border-b border-gray-100 p-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Básico</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">R$99</span>
                  <span className="ml-1 text-gray-500">/mês</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Ideal para veterinários autônomos que estão começando.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Até 30 laudos por mês</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>10 modelos de achados incluídos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>5 modelos de conclusão incluídos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Gestão de pacientes e clínicas</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Compartilhamento de laudos</span>
                  </li>
                  <li className="flex items-start">
                    <X size={20} className="mr-2 mt-0.5 flex-shrink-0 text-red-500" />
                    <span className="text-gray-400">Gestão financeira avançada</span>
                  </li>
                  <li className="flex items-start">
                    <X size={20} className="mr-2 mt-0.5 flex-shrink-0 text-red-500" />
                    <span className="text-gray-400">Relatórios personalizados</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/register?plan=basic"
                    className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Começar Agora
                  </Link>
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="relative z-10 scale-105 transform overflow-hidden rounded-xl border-2 border-blue-500 bg-white shadow-lg">
              <div className="absolute right-0 top-0 bg-blue-500 px-4 py-1 text-sm font-medium text-white">
                Mais Popular
              </div>
              <div className="border-b border-gray-100 p-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Profissional</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">R$199</span>
                  <span className="ml-1 text-gray-500">/mês</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Perfeito para veterinários com volume médio de laudos.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Até 100 laudos por mês</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>30 modelos de achados incluídos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>15 modelos de conclusão incluídos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Gestão de pacientes e clínicas</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Compartilhamento de laudos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Gestão financeira avançada</span>
                  </li>
                  <li className="flex items-start">
                    <X size={20} className="mr-2 mt-0.5 flex-shrink-0 text-red-500" />
                    <span className="text-gray-400">Relatórios personalizados</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/register?plan=professional"
                    className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Escolher Plano
                  </Link>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
              <div className="border-b border-gray-100 p-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">Empresarial</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">R$349</span>
                  <span className="ml-1 text-gray-500">/mês</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Para clínicas e veterinários com alto volume de laudos.
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Laudos ilimitados</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Modelos de achados ilimitados</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Modelos de conclusão ilimitados</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Gestão de pacientes e clínicas</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Compartilhamento de laudos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Gestão financeira avançada</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>Relatórios personalizados</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/register?plan=enterprise"
                    className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white transition-colors hover:bg-blue-700"
                  >
                    Escolher Plano
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">O Que Dizem Nossos Clientes</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Veterinários de todo o Brasil confiam no Laudde para seus laudos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <span className="text-xl font-bold">D</span>
                </div>
                <div>
                  <h4 className="font-medium">Dra. Ana Silva</h4>
                  <p className="text-sm text-gray-500">Ultrassonografista - São Paulo</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;O Laudde revolucionou minha rotina de trabalho. Consigo criar laudos
                profissionais em metade do tempo que levava antes, e os modelos de texto são
                extremamente úteis.&quot;
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <span className="text-xl font-bold">C</span>
                </div>
                <div>
                  <h4 className="font-medium">Dr. Carlos Mendes</h4>
                  <p className="text-sm text-gray-500">Radiologista - Rio de Janeiro</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;A gestão financeira do Laudde me ajudou a ter uma visão clara da minha
                receita. Agora consigo enviar relatórios financeiros para as clínicas parceiras com
                apenas alguns cliques.&quot;
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center">
                <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <span className="text-xl font-bold">F</span>
                </div>
                <div>
                  <h4 className="font-medium">Dra. Fernanda Lima</h4>
                  <p className="text-sm text-gray-500">Ultrassonografista - Belo Horizonte</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Os tutores adoram receber os laudos pelo link compartilhável. A plataforma é
                intuitiva e me permite duplicar laudos semelhantes, economizando muito tempo no dia
                a dia.&quot;
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">
              Respostas para as dúvidas mais comuns sobre o Laudde
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'Como funciona o período de teste gratuito?',
                answer:
                  'Oferecemos um período de teste gratuito de 14 dias para todos os planos. Durante esse período, você terá acesso a todas as funcionalidades do plano escolhido, sem compromisso. Não é necessário cartão de crédito para iniciar o teste.',
              },
              {
                question: 'Posso mudar de plano depois?',
                answer:
                  'Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Se fizer upgrade, a mudança é imediata. Se fizer downgrade, a mudança ocorrerá no próximo ciclo de faturamento.',
              },
              {
                question: 'Como funciona o compartilhamento de laudos?',
                answer:
                  'Você pode compartilhar laudos de duas formas: enviando diretamente por e-mail para clínicas e tutores, ou gerando um link de acesso público que pode ser compartilhado via WhatsApp, e-mail ou qualquer outro meio. O link permite visualizar o laudo sem necessidade de login.',
              },
              {
                question: 'Posso personalizar os modelos de texto?',
                answer:
                  'Sim, além dos modelos incluídos no seu plano, você pode criar e personalizar seus próprios modelos de achados e conclusões. Eles ficam organizados por categoria para facilitar o uso durante a criação de laudos.',
              },
              {
                question: 'O sistema funciona em dispositivos móveis?',
                answer:
                  'Sim, o Laudde é totalmente responsivo e funciona em qualquer dispositivo - desktop, tablet ou smartphone. Você pode criar e gerenciar laudos de onde estiver, com uma interface adaptada para cada tipo de tela.',
              },
              {
                question: 'Como funciona a gestão financeira?',
                answer:
                  'O módulo financeiro permite registrar receitas e despesas, categorizar transações, gerar relatórios por período ou por clínica, e acompanhar seu lucro em tempo real. Você também pode enviar relatórios financeiros para clínicas parceiras.',
              },
              {
                question: 'É possível exportar os laudos em PDF?',
                answer:
                  'Sim, todos os laudos podem ser exportados em formato PDF com layout profissional, pronto para impressão ou compartilhamento digital. O PDF mantém toda a formatação, incluindo imagens anexadas ao laudo.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openFaq === index ? 'rotate-180 transform' : ''}`}
                  />
                </button>
                <div className={`px-6 pb-4 ${openFaq === index ? 'block' : 'hidden'}`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold">Por que escolher o Laudde?</h2>
            <p className="mx-auto max-w-3xl text-xl text-blue-100">
              Vantagens que fazem a diferença na sua rotina como veterinário especialista
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white">
                <Zap size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Agilidade</h3>
              <p className="text-blue-100">
                Reduza o tempo de criação de laudos em até 70% com modelos pré-definidos e
                duplicação inteligente.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white">
                <Shield size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Segurança</h3>
              <p className="text-blue-100">
                Seus dados estão protegidos com criptografia de ponta a ponta e backups automáticos
                diários.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white">
                <Clock size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Disponibilidade</h3>
              <p className="text-blue-100">
                Acesse seus laudos a qualquer hora, de qualquer lugar, com disponibilidade garantida
                de 99,9%.
              </p>
            </div>

            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white">
                <Award size={24} />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Profissionalismo</h3>
              <p className="text-blue-100">
                Impressione clínicas e tutores com laudos de aparência profissional e
                compartilhamento moderno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Pronto para transformar sua rotina de laudos?
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            Junte-se a centenas de veterinários que já otimizaram seu fluxo de trabalho com o
            Laudde. Experimente gratuitamente por 14 dias, sem compromisso.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="/auth/login"
              className="rounded-lg bg-blue-600 px-8 py-4 text-center font-medium text-white transition-colors hover:bg-blue-700"
            >
              Começar Teste Gratuito
            </Link>
            <a
              href="#pricing"
              className="rounded-lg border border-gray-300 px-8 py-4 text-center font-medium text-gray-700 transition-colors hover:bg-gray-50"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 text-2xl font-bold text-white">Laudde</div>
              <p className="mb-4 text-gray-400">
                Plataforma completa para criação e gestão de laudos veterinários.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 transition-colors hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.992 18.032c-.24.4-.557.733-.941.983-.385.25-.819.423-1.299.521-.48.098-1.029.147-1.649.147h-4.206c-.62 0-1.169-.049-1.649-.147-.48-.098-.914-.271-1.299-.521-.384-.25-.701-.583-.941-.983-.24-.4-.359-.84-.359-1.319v-7.426c0-.479.119-.919.359-1.319.24-.4.557-.733.941-.983.385-.25.819-.423 1.299-.521.48-.098 1.029-.147 1.649-.147h4.206c.62 0 1.169.049 1.649.147.48.098.914.271 1.299.521.384.25.701.583.941.983.24.4.359.84.359 1.319v7.426c0 .479-.119.919-.359 1.319zm-1.633-8.374c-.141-.257-.342-.44-.605-.55-.262-.11-.572-.165-.93-.165h-4.648c-.358 0-.668.055-.93.165-.263.11-.464.293-.605.55-.141.257-.211.56-.211.908v5.831c0 .348.07.651.211.908.141.257.342.44.605.55.262.11.572.165.93.165h4.648c.358 0 .668-.055.93-.165.263-.11.464-.293.605-.55.141-.257.211-.56.211-.908v-5.831c0-.348-.07-.651-.211-.908zm-3.359 6.713c-1.289 0-2.332-1.043-2.332-2.332 0-1.289 1.043-2.332 2.332-2.332 1.289 0 2.332 1.043 2.332 2.332 0 1.289-1.043 2.332-2.332 2.332zm0-3.888c-.858 0-1.556.698-1.556 1.556 0 .858.698 1.556 1.556 1.556.858 0 1.556-.698 1.556-1.556 0-.858-.698-1.556-1.556-1.556z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 transition-colors hover:text-white">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 transition-colors hover:text-white">
                    Planos e Preços
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 transition-colors hover:text-white">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 transition-colors hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-lg font-bold text-white">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a
                    href="mailto:contato@laudde.com.br"
                    className="transition-colors hover:text-white"
                  >
                    contato@laudde.com.br
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Telefone:</span>
                  <a href="tel:+551199999999" className="transition-colors hover:text-white">
                    (11) 9999-9999
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Endereço:</span>
                  <span>Av. Paulista, 1000 - São Paulo/SP</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Laudde. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
