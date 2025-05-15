"use client"

import { useState } from "react"
import Link from "next/link"
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
} from "lucide-react"

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="text-xl font-bold text-blue-600">Laudde</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                Funcionalidades
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                Planos
              </a>
              <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                Perguntas Frequentes
              </a>
              <Link
                href="/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Entrar
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Começar Agora
              </Link>
            </div>
            <div className="flex items-center md:hidden">
              <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-no-repeat bg-cover"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Laudos veterinários simplificados e profissionais</h1>
              <p className="text-xl mb-8 text-blue-100">
                Crie, gerencie e compartilhe laudos de ultrassonografia e raio-x com facilidade. Aumente sua
                produtividade e ofereça resultados de qualidade para clínicas e tutores.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/register"
                  className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-center"
                >
                  Experimente Grátis
                </Link>
                <a
                  href="#features"
                  className="px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-center"
                >
                  Conheça os Recursos
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=800"
                    alt="Dashboard do Laudde"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+5.000</div>
              <p className="text-gray-600">Laudos emitidos</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+200</div>
              <p className="text-gray-600">Veterinários ativos</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">+150</div>
              <p className="text-gray-600">Clínicas parceiras</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Funcionalidades Completas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo o que você precisa para criar laudos profissionais e gerenciar seu trabalho como veterinário
              especialista em diagnóstico por imagem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Laudos Personalizáveis</h3>
              <p className="text-gray-600">
                Crie laudos de ultrassonografia e raio-x com modelos personalizáveis para diferentes tipos de exames e
                categorias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <FileCode size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modelos de Texto</h3>
              <p className="text-gray-600">
                Biblioteca de modelos de texto para achados e conclusões, organizados por categoria, para agilizar a
                criação de laudos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {/* <Image size={24} /> */}
              </div>
              <h3 className="text-xl font-semibold mb-2">Anexo de Imagens</h3>
              <p className="text-gray-600">
                Anexe imagens de ultrassonografia e raio-x diretamente aos laudos para referência visual e
                compartilhamento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestão de Pacientes</h3>
              <p className="text-gray-600">
                Cadastre e gerencie pacientes com informações detalhadas, histórico de exames e dados dos tutores.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestão de Clínicas</h3>
              <p className="text-gray-600">
                Organize as clínicas parceiras, facilitando o envio de laudos e o controle financeiro por
                estabelecimento.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Share2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compartilhamento Fácil</h3>
              <p className="text-gray-600">
                Compartilhe laudos com clínicas e tutores via e-mail ou link público, com acesso seguro e rastreável.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <DollarSign size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestão Financeira</h3>
              <p className="text-gray-600">
                Controle receitas e despesas, gere relatórios financeiros e acompanhe o lucro por período e por clínica.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <BarChart2 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dashboard Analítico</h3>
              <p className="text-gray-600">
                Visualize estatísticas de produtividade, receita e pacientes atendidos em um painel intuitivo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsivo</h3>
              <p className="text-gray-600">
                Acesse a plataforma de qualquer dispositivo - desktop, tablet ou smartphone - com interface adaptativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Como Funciona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplifique seu fluxo de trabalho em apenas alguns passos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cadastre Pacientes e Clínicas</h3>
              <p className="text-gray-600">
                Adicione os dados dos pacientes e das clínicas parceiras para facilitar a criação de laudos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Crie Laudos Profissionais</h3>
              <p className="text-gray-600">
                Utilize modelos pré-definidos ou crie seus próprios laudos com achados e conclusões personalizadas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Compartilhe e Gerencie</h3>
              <p className="text-gray-600">
                Envie os laudos para clínicas e tutores, acompanhe pagamentos e gerencie suas finanças.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planos e Preços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para o seu volume de laudos e necessidades específicas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Básico</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">R$99</span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
                <p className="text-gray-600 mt-4">Ideal para veterinários autônomos que estão começando.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 30 laudos por mês</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>10 modelos de achados incluídos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>5 modelos de conclusão incluídos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gestão de pacientes e clínicas</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Compartilhamento de laudos</span>
                  </li>
                  <li className="flex items-start">
                    <X size={20} className="text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">Gestão financeira avançada</span>
                  </li>
                  <li className="flex items-start">
                    <X size={20} className="text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">Relatórios personalizados</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/register?plan=basic"
                    className="block w-full py-3 px-4 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Começar Agora
                  </Link>
                </div>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-blue-500 overflow-hidden transform scale-105 z-10 relative">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium">
                Mais Popular
              </div>
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Profissional</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">R$199</span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
                <p className="text-gray-600 mt-4">Perfeito para veterinários com volume médio de laudos.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Até 100 laudos por mês</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>30 modelos de achados incluídos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>15 modelos de conclusão incluídos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gestão de pacientes e clínicas</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Compartilhamento de laudos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gestão financeira avançada</span>
                  </li>
                  <li className="flex items-start">
                    <X size={20} className="text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400">Relatórios personalizados</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/register?plan=professional"
                    className="block w-full py-3 px-4 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Escolher Plano
                  </Link>
                </div>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Empresarial</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">R$349</span>
                  <span className="text-gray-500 ml-1">/mês</span>
                </div>
                <p className="text-gray-600 mt-4">Para clínicas e veterinários com alto volume de laudos.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Laudos ilimitados</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Modelos de achados ilimitados</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Modelos de conclusão ilimitados</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gestão de pacientes e clínicas</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Compartilhamento de laudos</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Gestão financeira avançada</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Relatórios personalizados</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link
                    href="/register?plan=enterprise"
                    className="block w-full py-3 px-4 bg-blue-600 text-white text-center font-medium rounded-lg hover:bg-blue-700 transition-colors"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">O Que Dizem Nossos Clientes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veterinários de todo o Brasil confiam no Laudde para seus laudos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <span className="text-xl font-bold">D</span>
                </div>
                <div>
                  <h4 className="font-medium">Dra. Ana Silva</h4>
                  <p className="text-sm text-gray-500">Ultrassonografista - São Paulo</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;O Laudde revolucionou minha rotina de trabalho. Consigo criar laudos profissionais em metade do tempo
                que levava antes, e os modelos de texto são extremamente úteis.&quot;
              </p>
              <div className="flex mt-4 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <span className="text-xl font-bold">C</span>
                </div>
                <div>
                  <h4 className="font-medium">Dr. Carlos Mendes</h4>
                  <p className="text-sm text-gray-500">Radiologista - Rio de Janeiro</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;A gestão financeira do Laudde me ajudou a ter uma visão clara da minha receita. Agora consigo enviar
                relatórios financeiros para as clínicas parceiras com apenas alguns cliques.&quot;
              </p>
              <div className="flex mt-4 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-4">
                  <span className="text-xl font-bold">F</span>
                </div>
                <div>
                  <h4 className="font-medium">Dra. Fernanda Lima</h4>
                  <p className="text-sm text-gray-500">Ultrassonografista - Belo Horizonte</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Os tutores adoram receber os laudos pelo link compartilhável. A plataforma é intuitiva e me permite
                duplicar laudos semelhantes, economizando muito tempo no dia a dia.&quot;
              </p>
              <div className="flex mt-4 text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Respostas para as dúvidas mais comuns sobre o Laudde</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Como funciona o período de teste gratuito?",
                answer:
                  "Oferecemos um período de teste gratuito de 14 dias para todos os planos. Durante esse período, você terá acesso a todas as funcionalidades do plano escolhido, sem compromisso. Não é necessário cartão de crédito para iniciar o teste.",
              },
              {
                question: "Posso mudar de plano depois?",
                answer:
                  "Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. Se fizer upgrade, a mudança é imediata. Se fizer downgrade, a mudança ocorrerá no próximo ciclo de faturamento.",
              },
              {
                question: "Como funciona o compartilhamento de laudos?",
                answer:
                  "Você pode compartilhar laudos de duas formas: enviando diretamente por e-mail para clínicas e tutores, ou gerando um link de acesso público que pode ser compartilhado via WhatsApp, e-mail ou qualquer outro meio. O link permite visualizar o laudo sem necessidade de login.",
              },
              {
                question: "Posso personalizar os modelos de texto?",
                answer:
                  "Sim, além dos modelos incluídos no seu plano, você pode criar e personalizar seus próprios modelos de achados e conclusões. Eles ficam organizados por categoria para facilitar o uso durante a criação de laudos.",
              },
              {
                question: "O sistema funciona em dispositivos móveis?",
                answer:
                  "Sim, o Laudde é totalmente responsivo e funciona em qualquer dispositivo - desktop, tablet ou smartphone. Você pode criar e gerenciar laudos de onde estiver, com uma interface adaptada para cada tipo de tela.",
              },
              {
                question: "Como funciona a gestão financeira?",
                answer:
                  "O módulo financeiro permite registrar receitas e despesas, categorizar transações, gerar relatórios por período ou por clínica, e acompanhar seu lucro em tempo real. Você também pode enviar relatórios financeiros para clínicas parceiras.",
              },
              {
                question: "É possível exportar os laudos em PDF?",
                answer:
                  "Sim, todos os laudos podem ser exportados em formato PDF com layout profissional, pronto para impressão ou compartilhamento digital. O PDF mantém toda a formatação, incluindo imagens anexadas ao laudo.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${openFaq === index ? "transform rotate-180" : ""}`}
                  />
                </button>
                <div className={`px-6 pb-4 ${openFaq === index ? "block" : "hidden"}`}>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Por que escolher o Laudde?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Vantagens que fazem a diferença na sua rotina como veterinário especialista
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agilidade</h3>
              <p className="text-blue-100">
                Reduza o tempo de criação de laudos em até 70% com modelos pré-definidos e duplicação inteligente.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Segurança</h3>
              <p className="text-blue-100">
                Seus dados estão protegidos com criptografia de ponta a ponta e backups automáticos diários.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Disponibilidade</h3>
              <p className="text-blue-100">
                Acesse seus laudos a qualquer hora, de qualquer lugar, com disponibilidade garantida de 99,9%.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-white mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Profissionalismo</h3>
              <p className="text-blue-100">
                Impressione clínicas e tutores com laudos de aparência profissional e compartilhamento moderno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pronto para transformar sua rotina de laudos?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Junte-se a centenas de veterinários que já otimizaram seu fluxo de trabalho com o Laudde. Experimente
            gratuitamente por 14 dias, sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/register"
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              Começar Teste Gratuito
            </Link>
            <a
              href="#pricing"
              className="px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              Ver Planos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">Laudde</div>
              <p className="text-gray-400 mb-4">Plataforma completa para criação e gestão de laudos veterinários.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.992 18.032c-.24.4-.557.733-.941.983-.385.25-.819.423-1.299.521-.48.098-1.029.147-1.649.147h-4.206c-.62 0-1.169-.049-1.649-.147-.48-.098-.914-.271-1.299-.521-.384-.25-.701-.583-.941-.983-.24-.4-.359-.84-.359-1.319v-7.426c0-.479.119-.919.359-1.319.24-.4.557-.733.941-.983.385-.25.819-.423 1.299-.521.48-.098 1.029-.147 1.649-.147h4.206c.62 0 1.169.049 1.649.147.48.098.914.271 1.299.521.384.25.701.583.941.983.24.4.359.84.359 1.319v7.426c0 .479-.119.919-.359 1.319zm-1.633-8.374c-.141-.257-.342-.44-.605-.55-.262-.11-.572-.165-.93-.165h-4.648c-.358 0-.668.055-.93.165-.263.11-.464.293-.605.55-.141.257-.211.56-.211.908v5.831c0 .348.07.651.211.908.141.257.342.44.605.55.262.11.572.165.93.165h4.648c.358 0 .668-.055.93-.165.263-.11.464-.293.605-.55.141-.257.211-.56.211-.908v-5.831c0-.348-.07-.651-.211-.908zm-3.359 6.713c-1.289 0-2.332-1.043-2.332-2.332 0-1.289 1.043-2.332 2.332-2.332 1.289 0 2.332 1.043 2.332 2.332 0 1.289-1.043 2.332-2.332 2.332zm0-3.888c-.858 0-1.556.698-1.556 1.556 0 .858.698 1.556 1.556 1.556.858 0 1.556-.698 1.556-1.556 0-.858-.698-1.556-1.556-1.556z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Funcionalidades
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Planos e Preços
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a href="mailto:contato@laudde.com.br" className="hover:text-white transition-colors">
                    contato@laudde.com.br
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Telefone:</span>
                  <a href="tel:+551199999999" className="hover:text-white transition-colors">
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

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Laudde. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
