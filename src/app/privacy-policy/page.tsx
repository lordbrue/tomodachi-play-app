import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao início
        </Link>

        <div className="prose prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Política de Privacidade - Tomodachi Play
          </h1>

          <p className="text-gray-300 mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Introdução</h2>
            <p className="text-gray-300 mb-4">
              Esta Política de Privacidade descreve como o Tomodachi Play coleta, usa, armazena e protege suas informações
              pessoais quando você usa nossa plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Informações que Coletamos</h2>
            <h3 className="text-xl font-medium mb-3 text-white">2.1 Informações Fornecidas por Você</h3>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Email e senha para criação de conta</li>
              <li>Informações de perfil (nome de usuário, foto, descrição)</li>
              <li>Conteúdo compartilhado na plataforma (posts, comentários)</li>
              <li>Informações de pagamento (quando aplicável)</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 text-white">2.2 Informações Coletadas Automaticamente</h3>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Endereço IP e localização aproximada</li>
              <li>Tipo de dispositivo e navegador</li>
              <li>Dados de uso da plataforma (páginas visitadas, tempo gasto)</li>
              <li>Cookies e tecnologias similares</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Como Usamos Suas Informações</h2>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Fornecer e manter nossa plataforma</li>
              <li>Processar cadastros e autenticações</li>
              <li>Personalizar sua experiência na plataforma</li>
              <li>Comunicar atualizações e notificações importantes</li>
              <li>Garantir segurança e prevenir fraudes</li>
              <li>Melhorar nossos serviços através de análises</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Compartilhamento de Informações</h2>
            <p className="text-gray-300 mb-4">
              Não vendemos suas informações pessoais para terceiros. Podemos compartilhar suas informações apenas nas seguintes situações:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Com seu consentimento explícito</li>
              <li>Para cumprir leis ou ordens judiciais</li>
              <li>Para proteger direitos e segurança de usuários</li>
              <li>Com provedores de serviços que nos ajudam a operar (sob acordos de confidencialidade)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Cookies e Tecnologias de Rastreamento</h2>
            <p className="text-gray-300 mb-4">
              Usamos cookies para melhorar sua experiência, lembrar suas preferências e analisar o uso da plataforma.
              Você pode controlar cookies através das configurações do seu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Segurança dos Dados</h2>
            <p className="text-gray-300 mb-4">
              Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra
              acesso não autorizado, alteração, divulgação ou destruição. Isso inclui criptografia SSL/TLS, firewalls e
              controles de acesso rigorosos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Retenção de Dados</h2>
            <p className="text-gray-300 mb-4">
              Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as finalidades descritas nesta
              política, a menos que um período de retenção mais longo seja exigido por lei.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Seus Direitos</h2>
            <p className="text-gray-300 mb-4">Você tem o direito de:</p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Acessar suas informações pessoais</li>
              <li>Corrigir dados inexatos</li>
              <li>Solicitar exclusão de seus dados</li>
              <li>Restringir ou opor-se ao processamento</li>
              <li>Portabilidade dos dados</li>
              <li>Retirar consentimento quando aplicável</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Dados de Menores</h2>
            <p className="text-gray-300 mb-4">
              Nossa plataforma não é destinada a menores de 18 anos. Não coletamos intencionalmente informações pessoais
              de menores. Se descobrirmos que coletamos dados de um menor, excluiremos essas informações imediatamente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Transferências Internacionais</h2>
            <p className="text-gray-300 mb-4">
              Suas informações podem ser transferidas e processadas em países diferentes do seu. Garantimos que tais
              transferências estejam em conformidade com leis de proteção de dados aplicáveis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Alterações a Esta Política</h2>
            <p className="text-gray-300 mb-4">
              Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas através de
              email ou aviso na plataforma. O uso continuado constitui aceitação da política atualizada.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Contato</h2>
            <p className="text-gray-300 mb-4">
              Para questões sobre privacidade ou exercer seus direitos, entre em contato:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Email: privacy@tomodachiplay.com</li>
              <li>Endereço: [Seu endereço físico, se aplicável]</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Controlador de Dados</h2>
            <p className="text-gray-300 mb-4">
              Tomodachi Play é o controlador responsável pelo processamento de seus dados pessoais conforme descrito nesta política.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}