import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

export default function SecurityPolicyPage() {
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
            Política de Segurança - Tomodachi Play
          </h1>

          <p className="text-gray-300 mb-6">
            <strong>Última atualização:</strong> {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-purple-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Compromisso com a Segurança</h3>
                <p className="text-gray-300">
                  A segurança de nossos usuários é nossa prioridade máxima. Esta política descreve nossas medidas
                  de proteção e como mantemos um ambiente seguro para toda a comunidade otaku.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
              <Lock className="w-6 h-6 mr-2 text-purple-400" />
              1. Medidas Técnicas de Segurança
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">Criptografia</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Criptografia SSL/TLS para todas as transmissões de dados</li>
                  <li>• Dados sensíveis criptografados em repouso</li>
                  <li>• Uso de algoritmos de criptografia modernos (AES-256)</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">Infraestrutura</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Servidores em data centers certificados SOC 2</li>
                  <li>• Firewalls de última geração e sistemas de detecção de intrusão</li>
                  <li>• Monitoramento 24/7 da infraestrutura</li>
                  <li>• Backups automáticos e testes de recuperação</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">Controle de Acesso</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Autenticação multifator (2FA) obrigatória para funcionários</li>
                  <li>• Princípio do menor privilégio aplicado</li>
                  <li>• Logs detalhados de todas as ações administrativas</li>
                  <li>• Revisões regulares de permissões de acesso</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
              <Eye className="w-6 h-6 mr-2 text-purple-400" />
              2. Proteção de Dados Pessoais
            </h2>
            <p className="text-gray-300 mb-4">
              Implementamos rigorosas medidas para proteger suas informações pessoais:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Senhas são hashadas com algoritmos seguros (bcrypt)</li>
              <li>Dados pessoais são anonimizados quando possível</li>
              <li>Exclusão automática de dados não utilizados</li>
              <li>Auditorias regulares de conformidade com LGPD</li>
              <li>Minimização de dados coletados ao essencial</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Moderação e Monitoramento</h2>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">Sistema de Moderação</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Equipe dedicada de moderadores treinados</li>
                  <li>• Algoritmos de detecção de conteúdo inadequado</li>
                  <li>• Relatórios de usuários para denúncias rápidas</li>
                  <li>• Revisão manual de conteúdo suspeito</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">Prevenção de Abuso</h3>
                <ul className="text-gray-300 space-y-1">
                  <li>• Limites de taxa para prevenir spam e ataques</li>
                  <li>• Verificação de contas para prevenir bots</li>
                  <li>• Sistema de reputação para usuários</li>
                  <li>• Bloqueio automático de IPs suspeitos</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-purple-400" />
              4. Programa de Divulgação de Vulnerabilidades
            </h2>
            <p className="text-gray-300 mb-4">
              Valorizamos pesquisadores de segurança que nos ajudam a manter nossa plataforma segura.
            </p>

            <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
              <h3 className="text-lg font-medium text-white mb-2">Diretrizes para Pesquisadores</h3>
              <ul className="text-gray-300 space-y-1">
                <li>• Teste apenas em sistemas que você possui ou tem permissão</li>
                <li>• Não cause interrupção de serviço ou perda de dados</li>
                <li>• Não acesse dados de outros usuários</li>
                <li>• Relate vulnerabilidades de forma responsável</li>
              </ul>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-2">Como Reportar</h3>
              <p className="text-gray-300 mb-2">
                Envie relatórios de vulnerabilidades para: security@tomodachiplay.com
              </p>
              <p className="text-gray-300">
                Inclua detalhes técnicos, passos para reproduzir e impacto potencial.
                Responderemos em até 48 horas e manteremos confidencialidade.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Resposta a Incidentes</h2>
            <p className="text-gray-300 mb-4">
              Temos um plano de resposta a incidentes estabelecido:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Equipe de resposta 24/7 para incidentes de segurança</li>
              <li>Notificação imediata aos usuários afetados</li>
              <li>Transparência sobre incidentes e medidas tomadas</li>
              <li>Aprendizado contínuo para prevenir recorrências</li>
              <li>Cumprimento de requisitos legais de notificação</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Segurança da Conta do Usuário</h2>
            <p className="text-gray-300 mb-4">
              Recomendamos as seguintes práticas para manter sua conta segura:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Use senhas fortes e únicas</li>
              <li>Ative autenticação de dois fatores (2FA)</li>
              <li>Não compartilhe credenciais de login</li>
              <li>Monitore atividades suspeitas em sua conta</li>
              <li>Faça logout em dispositivos públicos</li>
              <li>Mantenha seu software e dispositivos atualizados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Conformidade e Certificações</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">LGPD</h3>
                <p className="text-gray-300 text-sm">
                  Conformidade com a Lei Geral de Proteção de Dados do Brasil
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">SOC 2</h3>
                <p className="text-gray-300 text-sm">
                  Certificação para controles de segurança organizacional
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">ISO 27001</h3>
                <p className="text-gray-300 text-sm">
                  Padrões internacionais de gestão de segurança da informação
                </p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">PCI DSS</h3>
                <p className="text-gray-300 text-sm">
                  Para processamento seguro de pagamentos
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">8. Atualizações de Segurança</h2>
            <p className="text-gray-300 mb-4">
              Mantemos nossas medidas de segurança atualizadas com as melhores práticas da indústria:
            </p>
            <ul className="text-gray-300 mb-4 list-disc list-inside space-y-2">
              <li>Auditorias de segurança regulares</li>
              <li>Treinamento contínuo da equipe</li>
              <li>Atualização de software e patches de segurança</li>
              <li>Monitoramento de ameaças emergentes</li>
              <li>Participação em programas de bug bounty</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">9. Contato e Suporte</h2>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <p className="text-gray-300 mb-2">
                Para questões relacionadas à segurança:
              </p>
              <ul className="text-gray-300 space-y-1">
                <li>• <strong>Relatórios de vulnerabilidades:</strong> security@tomodachiplay.com</li>
                <li>• <strong>Suporte geral:</strong> support@tomodachiplay.com</li>
                <li>• <strong>Emergências:</strong> +55 11 9999-9999 (24/7)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">10. Compromisso com a Comunidade</h2>
            <p className="text-gray-300 mb-4">
              Acreditamos que um ambiente seguro é essencial para que a comunidade otaku possa se conectar e compartilhar
              paixões livremente. Continuaremos investindo em segurança para garantir que o Tomodachi Play seja um espaço
              confiável e protegido para todos os usuários.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}