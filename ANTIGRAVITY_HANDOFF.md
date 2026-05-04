# Antigravity Migration Context - simplemsg-painel

Este arquivo contém o resumo do progresso e as configurações necessárias para continuar o desenvolvimento em outra máquina.

## Status Atual do Projeto
- **Progresso**: O projeto foi inicializado, configurado com Appwrite e Tailwind v4, e implantado via Portainer no servidor Hetzner.
- **URL de Produção**: [https://painel.simplemsg.net.br](https://painel.simplemsg.net.br)
- **Deployment**: Atualmente feito manualmente via Portainer (**Pull and redeploy**) porque o GitHub Actions está bloqueado por cobrança pendente.

## Informações Técnicas Importantes
- **Appwrite**: 
  - Endpoint: `https://apw.simplemsg.net.br/v1`
  - Project ID: `69f87aa20030b41f3860` (Confirmado pelo usuário)
- **Infraestrutura**:
  - Servidor: `49.13.156.225` (Hetzner)
  - Stack Portainer: `app-simplemsg-painel`
  - Rede Docker: `pwbot_net`
- **Secrets da Organização (GitHub)**:
  - `HETZNER_HOST`, `HETZNER_USER`, `HETZNER_SSH_KEY` já estão configurados no nível da organização.

## Itens Pendentes / Próximos Passos
1. **DNS**: Verificado e funcional (Record A apontando para Hetzner).
2. **Novas Funcionalidades**: O portal básico (Login/Register/Dashboard) está pronto. O próximo passo é definir as funcionalidades internas do SaaS.
3. **GitHub Actions**: Caso a conta seja desbloqueada, será necessário configurar o `HETZNER_SSH_PASSPHRASE` no repositório.

---

## Como retomar no novo Notebook
1. Abra a pasta do projeto no VS Code.
2. Inicie o Antigravity.
3. **Dica**: No primeiro prompt, envie: 
   > "Leia o arquivo `ANTIGRAVITY_HANDOFF.md` para entender o contexto atual e vamos continuar de onde paramos."

Arquivo gerado em: 04/05/2026.
