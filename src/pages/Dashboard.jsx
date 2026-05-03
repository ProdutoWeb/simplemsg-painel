import { useEffect, useState } from 'react';
import { account } from '../lib/appwrite';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, LayoutDashboard, Loader2, Key } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await account.get();
        setUser(userData);
      } catch (err) {
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/login');
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950">
        <Loader2 className="animate-spin text-primary-500" size={40} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col">
      <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-primary-500 p-2 rounded-lg text-white">
            <LayoutDashboard size={24} />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white hidden sm:inline-block">
            Painel de Controle
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          >
            <LogOut size={18} />
            <span className="hidden sm:inline">Sair</span>
          </button>
        </div>
      </nav>

      <main className="flex-grow p-6 max-w-7xl mx-auto w-full">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-800 p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Bem-vindo, {user?.name || 'Usuário'}! 👋
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Você está autenticado com sucesso no Portal do Cliente.
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-gray-50 dark:bg-slate-800 p-4 rounded-xl border border-gray-100 dark:border-slate-700">
              <div className="bg-green-100 dark:bg-green-900/30 text-green-600 p-2 rounded-full">
                <User size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">STATUS</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Sessão Ativa</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
              <div className="flex items-center gap-3 mb-4">
                <Mail size={20} className="text-primary-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Informações de Contato</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">E-mail registrado:</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">{user?.email}</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
              <div className="flex items-center gap-3 mb-4">
                <Key size={20} className="text-primary-500" />
                <h3 className="font-semibold text-gray-900 dark:text-white">Identificação do Sistema</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">ID do Usuário (Appwrite):</p>
              <code className="block mt-1 p-2 bg-white dark:bg-slate-800 rounded border border-gray-200 dark:border-slate-700 text-xs text-primary-600 dark:text-primary-400 font-mono break-all">
                {user?.$id}
              </code>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-xl">
            <h3 className="text-xl font-bold mb-2">Pronto para começar?</h3>
            <p className="opacity-90 max-w-2xl">
              Este é o ponto de partida do seu novo Portal do Cliente. Explore as funcionalidades e comece a gerenciar seus dados com segurança e rapidez.
            </p>
            <button className="mt-6 px-6 py-2 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors">
              Explorar Documentação
            </button>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-gray-500 dark:text-gray-500 text-sm border-t border-gray-200 dark:border-slate-900">
        &copy; {new Date().getFullYear()} SimpleMSG - Todos os direitos reservados.
      </footer>
    </div>
  );
}
