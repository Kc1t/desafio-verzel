import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string().min(1, 'Username é obrigatório'),
  email: z.string().email('Email inválido').nonempty('Email é obrigatório'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
});
