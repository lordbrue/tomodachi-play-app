import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
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
            Termos de Uso - Tomodachi Play
          </h1>

          <p className="text-gray-300 mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Aceitação dos Termos</h2>
            <p className="text-gray-300 mb-4">
              Ao acessar e usar o Tomodachi Play, você concorda em cumprir e estar vinculado a estes Termos de Uso.
              Se você não concordar com estes termos, por favor, não use nossa plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Descrição do Serviço</h2>
            <p className="text-gray-300 mb-4">
              O Tomodachi Play é uma plataforma digital que conecta usuários interessados em assistir animes com acompanhantes virtuais.
              Nossa comunidade é dedicada a compartilhamento de experiências otaku de forma segura e respeitosa.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Elegibilidade</h2>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Você deve ter pelo menos 18 anos de idade para usar nossa plataforma</li>
              <li>Usuários menores de idade não são permitidos</li>
              <li>Você deve fornecer informações verdadeiras e precisas durante o cadastro</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Conta de Usuário</h2>
            <p className="text-gray-300 mb-4">
              Você é responsável por manter a confidencialidade de sua conta e senha. Você concorda em aceitar responsabilidade
              por todas as atividades que ocorrem em sua conta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Conduta do Usuário</h2>
            <p className="text-gray-300 mb-4">Ao usar o Tomodachi Play, você concorda em NÃO:</p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Violar leis ou regulamentos aplicáveis</li>
              <li>Compartilhar conteúdo ilegal, ofensivo ou prejudicial</li>
              <li>Assediar, intimidar ou discriminar outros usuários</li>
              <li>Usar a plataforma para fins comerciais não autorizados</li>
              <li>Distribuir malware ou tentar comprometer a segurança da plataforma</li>
              <li>Impersonar outros usuários ou fornecer informações falsas</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Conteúdo do Usuário</h2>
            <p className="text-gray-300 mb-4">
              Você mantém os direitos sobre o conteúdo que publica na plataforma. Ao publicar conteúdo, você concede ao
              Tomodachi Play uma licença não-exclusiva para usar, exibir e distribuir seu conteúdo dentro da plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Serviços de Acompanhantes</h2>
            <p className="text-gray-300 mb-4">
              Os acompanhantes virtuais são usuários independentes. O Tomodachi Play não garante a qualidade ou disponibilidade
              dos serviços oferecidos. Todas as interações devem ser consensuais e respeitosas.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Pagamentos e Assinaturas</h2>
            <p className="text-gray-300 mb-4">
              Alguns recursos podem requerer pagamento. Todos os pagamentos são processados de forma segura e você concorda
              com nossa política de reembolso aplicável.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Moderação e Suspensão</h2>
            <p className="text-gray-300 mb-4">
              Reservamo-nos o direito de moderar conteúdo, suspender ou banir contas que violem estes termos.
              Nossa decisão é final e não está sujeita a apelação.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Limitação de Responsabilidade</h2>
            <p className="text-gray-300 mb-4">
              O Tomodachi Play não se responsabiliza por danos indiretos, incidentais ou consequenciais decorrentes do uso
              da plataforma. Nossa responsabilidade é limitada ao valor pago pelo usuário nos últimos 12 meses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">11. Indenização</h2>
            <p className="text-gray-300 mb-4">
              Você concorda em indenizar e isentar o Tomodachi Play de qualquer reivindicação decorrente de sua violação
              destes termos ou uso indevido da plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">12. Alterações aos Termos</h2>
            <p className="text-gray-300 mb-4">
              Podemos atualizar estes termos periodicamente. Continuar usando a plataforma após alterações constitui
              aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">13. Lei Aplicável</h2>
            <p className="text-gray-300 mb-4">
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">14. Contato</h2>
            <p className="text-gray-300 mb-4">
              Para dúvidas sobre estes termos, entre em contato conosco através do email: legal@tomodachiplay.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}