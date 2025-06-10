import { query, validationResult } from 'express-validator'
import Agent from '../models/Agent.js'

export async function index(req, res, next) {
  try {
    const userId = req.session.userId

    // Filters
    // http://localhost:3000/?name=Smith
    const filterName = req.query.name
    // http://localhost:3000/?age=33
    const filterAge = req.query.age

    // Pagination
    // http://localhost:3000/?limit=2&skip=2
    const limit = req.query.limit
    const skip = req.query.skip

    // Sorting
    // http://localhost:3000/?sort=-name
    // http://localhost:3000/?sort=-age%20-name
    const sort = req.query.sort

    const filter = {
      owner: userId,
    }

    if (filterName) {
      filter.name = filterName
    }

    if (filterAge) {
      filter.age = filterAge
    }

    res.locals.agents = await Agent.list(filter, limit, skip, sort)

    const now = new Date()
    res.locals.esPar = (now.getSeconds() % 2) === 0
    res.locals.segundoActual = now.getSeconds()

    res.locals.codigo = '<script>alert("inyectado!!!")</script>'

    res.render('home')

  } catch (error) {
    next(error)
  }
}

// /param_in_route/45
export function paranInRoute(req, res, next) {
  const num = req.params.num

  res.send('me has pasado ' + num)
}

// /param_in_route_multiple/pantalon/size/M/color/blue
export function paranInRouteMultiple(req, res, next) {
  const product = req.params.product
  const size = req.params.size
  const color = req.params.color

  res.send(`quieres un ${product} de talla ${size} y color ${color}`)
}

// /param_in_query?color=rojo
export const validateParamInQuery = [
  query('color')
    // .notEmpty()
    .custom(value => {
      return ['red', 'blue'].includes(value)
    })
    .withMessage('must be red or blue'),
  query('talla')
    .isNumeric()
    .withMessage('must be numeric')
]
export function paramInQuery(req, res, next) {
  validationResult(req).throw()

  const color = req.query.color


  console.log(req.query)

  res.send(`el color es ${color}`)
}

// POST /post_with_body
export function postWithBody(req, res, next) {
  const { age, color } = req.body

  res.send('ok')
}