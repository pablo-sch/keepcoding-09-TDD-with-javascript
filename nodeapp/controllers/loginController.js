import User from "../models/User.js";

export function index(req, res, next) {
  res.locals.error = "";
  res.locals.email = "";
  res.render("login");
}

export async function postLogin(req, res, next) {
  try {
    const { email, password } = req.body;
    const redir = req.query.redir;
    // buscar el usuario en la base de datos
    const user = await User.findOne({ email: email });
    console.log(user);

    // si no lo encuentro, o la contraseña no coincide --> error
    if (!user || !(await user.comparePassword(password))) {
      console.log(
        `Login failed for user ${email}: user not found or password mismatch`
      );
      res.locals.error = "Invalid credentials";
      res.locals.email = email;
      res.render("login");
      console.log(`Login failed for user ${email}`);
      return;
    }

    // Registrar el inicio de sesión
    const ip = req.ip || req.connection.remoteAddress;
    user.addLoginRecord(ip);
    console.log(`Login record added for user ${user.email} from IP ${ip}`);
    await user.save();

    // si el usuario existe y la contraseña es buena --> redirect a la home
    req.session.userId = user.id;

    res.redirect(redir ? redir : "/");
  } catch (error) {
    next(error);
  }
}

export function logout(req, res, next) {
  req.session.regenerate((err) => {
    if (err) {
      next(err);
      return;
    }
    res.redirect("/");
  });
}
