import session from "express-session";
import MongoStore from "connect-mongo";

const INACTIVITY_EXPIRATION_2_DAYS = 1000 * 60 * 60 * 24 * 2;

// midlleware para gestionar sesiones
export const middleware = session({
  name: "nodeapp-session",
  secret: "jz9)^2tC3r/:+hGYm$cNLZB&A-6n5Q#gf=K?P",
  saveUninitialized: true, // crear una sesión vacia a cada usuario
  resave: false,
  cookie: { maxAge: INACTIVITY_EXPIRATION_2_DAYS },
  store: MongoStore.create({
    mongoUrl: "mongodb://localhost/cursonode",
  }),
});

export function useSessionInViews(req, res, next) {
  res.locals.session = req.session;
  next();
}

export function guard(req, res, next) {
  if (!req.session.userId) {
    res.redirect(`/login?redir=${req.url}`);
    return;
  }
  next();
}
