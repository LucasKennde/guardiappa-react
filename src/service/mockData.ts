// Mock Data Service - Substitui o Supabase com dados em memória

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    cpf: string;
    birthdate: string;
    isAdmin: boolean;
    deleted: boolean;
    is_verified?: boolean;
    created_at: string;
}

interface Complaint {
    id: string;
    text: string;
    tipo_ajuda: string;
    created_at: string;
}

interface AuthSession {
    user: {
        id: string;
        email: string;
        name: string;
    };
    access_token: string;
}

interface AuthResponse {
    data: AuthSession | { user: any } | { session: AuthSession | null } | { user: any | null } | null;
    error: { message: string } | null;
}

const STORAGE_KEYS = {
    USERS: 'aurora_users',
    COMPLAINTS: 'aurora_complaints',
    CURRENT_USER: 'aurora_current_user'
};

// Dados iniciais mockados
const INITIAL_USERS: User[] = [
    {
        id: '1',
        name: 'Admin Teste',
        email: 'admin@aurora.com',
        password: '123456',
        cpf: '123.456.789-00',
        birthdate: '1990-01-01',
        isAdmin: true,
        is_verified: true,
        deleted: false,
        created_at: new Date().toISOString()
    },
    {
        id: '2',
        name: 'Gestor Exemplo',
        email: 'gestor@aurora.com',
        password: '123456',
        cpf: '987.654.321-00',
        birthdate: '1985-05-15',
        isAdmin: true,
        is_verified: true,
        deleted: false,
        created_at: new Date().toISOString()
    },
    {
        id: '3',
        name: 'Usuário Comum',
        email: 'usuario@aurora.com',
        password: '123456',
        cpf: '111.222.333-44',
        birthdate: '1995-03-20',
        isAdmin: false,
        is_verified: false,
        deleted: false,
        created_at: new Date().toISOString()
    }
];

const INITIAL_COMPLAINTS: Complaint[] = [
    {
        id: '1',
        text: 'Sofri bullying no corredor da escola',
        tipo_ajuda: 'bullying',
        created_at: '2024-12-10T10:30:00.000Z'
    },
    {
        id: '2',
        text: 'Presenciei uma situação de violência verbal',
        tipo_ajuda: 'violencia',
        created_at: '2024-12-11T14:20:00.000Z'
    },
    {
        id: '3',
        text: 'Preciso de ajuda com uma situação delicada',
        tipo_ajuda: 'outros',
        created_at: '2024-12-12T09:15:00.000Z'
    },
    {
        id: '4',
        text: 'Sofri assédio no ambiente escolar',
        tipo_ajuda: 'abuso',
        created_at: '2024-12-13T16:45:00.000Z'
    }
];

// Inicializar dados no localStorage se não existirem
function initializeStorage(): void {
    if (!localStorage.getItem(STORAGE_KEYS.USERS)) {
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(INITIAL_USERS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.COMPLAINTS)) {
        localStorage.setItem(STORAGE_KEYS.COMPLAINTS, JSON.stringify(INITIAL_COMPLAINTS));
    }
}

// Funções para manipular usuários
export const mockUsers = {
    getAll: (): User[] => {
        initializeStorage();
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.USERS) || '[]');
    },

    getByEmail: (email: string): User | undefined => {
        const users = mockUsers.getAll();
        return users.find(u => u.email === email && !u.deleted);
    },

    getById: (id: string): User | undefined => {
        const users = mockUsers.getAll();
        return users.find(u => u.id === id && !u.deleted);
    },

    create: (userData: Partial<User>): User => {
        const users = mockUsers.getAll();
        const newUser: User = {
            id: String(Date.now()),
            name: userData.name || '',
            email: userData.email || '',
            password: userData.password || '',
            cpf: userData.cpf || '',
            birthdate: userData.birthdate || '',
            isAdmin: userData.isAdmin || false,
            is_verified: userData.is_verified || false,
            deleted: false,
            created_at: new Date().toISOString()
        };
        users.push(newUser);
        localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
        return newUser;
    },

    update: (id: string, updates: Partial<User>): User | null => {
        const users = mockUsers.getAll();
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users[index] = { ...users[index], ...updates };
            localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
            return users[index];
        }
        return null;
    },

    delete: (id: string): boolean => {
        const users = mockUsers.getAll();
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users[index].deleted = true;
            localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
            return true;
        }
        return false;
    }
};

// Funções para manipular denúncias
export const mockComplaints = {
    getAll: (): Complaint[] => {
        initializeStorage();
        return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLAINTS) || '[]');
    },

    getById: (id: string): Complaint | undefined => {
        const complaints = mockComplaints.getAll();
        return complaints.find(c => c.id === id);
    },

    create: (complaintData: Partial<Complaint>): Complaint => {
        const complaints = mockComplaints.getAll();
        const newComplaint: Complaint = {
            id: String(Date.now()),
            text: complaintData.text || '',
            tipo_ajuda: complaintData.tipo_ajuda || '',
            created_at: new Date().toISOString()
        };
        complaints.push(newComplaint);
        localStorage.setItem(STORAGE_KEYS.COMPLAINTS, JSON.stringify(complaints));
        return newComplaint;
    },

    delete: (id: string): boolean => {
        const complaints = mockComplaints.getAll();
        const filtered = complaints.filter(c => c.id !== id);
        localStorage.setItem(STORAGE_KEYS.COMPLAINTS, JSON.stringify(filtered));
        return true;
    }
};

// Funções de autenticação mockada
export const mockAuth = {
    signIn: (email: string, password: string): AuthResponse => {
        const user = mockUsers.getByEmail(email);
        if (user && user.password === password) {
            const session: AuthSession = {
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name
                },
                access_token: 'mock-token-' + Date.now()
            };
            localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(session));
            return { data: session, error: null };
        }
        return { data: null, error: { message: 'Email ou senha incorretos' } };
    },

    signUp: (email: string, password: string): AuthResponse => {
        const existingUser = mockUsers.getByEmail(email);
        if (existingUser) {
            return { data: null, error: { message: 'Email já cadastrado' } };
        }

        // Criar usuário de autenticação (sem dados completos ainda)
        const authUser = {
            id: String(Date.now()),
            email,
            password,
            created_at: new Date().toISOString()
        };

        return { data: { user: authUser }, error: null };
    },

    getSession: (): AuthResponse => {
        const session = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
        if (session) {
            return { data: { session: JSON.parse(session) }, error: null };
        }
        return { data: { session: null }, error: null };
    },

    getUser: (): AuthResponse => {
        const session = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
        if (session) {
            const { user } = JSON.parse(session);
            return { data: { user }, error: null };
        }
        return { data: { user: null }, error: null };
    },

    signOut: (): { error: null } => {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
        return { error: null };
    },

    onAuthStateChange: (callback: (session: AuthSession | null) => void) => {
        // Simular listener de mudanças de autenticação
        const checkAuth = () => {
            const session = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
            callback(session ? JSON.parse(session) : null);
        };

        // Verificar imediatamente
        checkAuth();

        // Retornar objeto com subscription mockada
        return {
            data: {
                subscription: {
                    unsubscribe: () => {
                        // Cleanup mockado
                    }
                }
            }
        };
    }
};

// Inicializar storage ao carregar o módulo
initializeStorage();
