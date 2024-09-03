import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/authService";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const user = await registerUser(username, email, password);
    res.status(201).json({ message: "Usuário Registrado com Sucesso!", user });
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await loginUser(email, password);
    res
      .status(200)
      .json({ message: "Usuário Logado com Sucesso!", user, token });
  } catch (error) {
    const err = error as Error;
    console.error("Error logando user:", err.message);
    res.status(400).json({ message: err.message });
  }
};
