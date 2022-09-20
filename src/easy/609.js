import { input_609 as input } from "./inputs.js"

const doIntersect = (r, d) => {
  return d <= 2 * r
}

const calculateAreaOfTheCircle = (r, d) => {
  // h is the distance betwen middle point of d and radius of the sphere. It is used to calculate the radius (a) below.
  const h = r - d / 2.0
  // a is a radius of circle that is created by the intersection of two spheres.
  // I'm not computing square root of a since we are going to calculate a^2 later.
  const a_squared = ((2 * r - h) * h)
  return Math.PI * a_squared
}


(() => {
  input.forEach(([r, d]) => {
    if (!doIntersect(r, d)) {
      console.warn(`For given radius ${r} and distance ${d} such spheres do not intersect!`);
      return
    }
    const area = calculateAreaOfTheCircle(r, d)
    console.log(`For given radius ${r} and distance ${d} such spheres intersect and creates new circle that area is ${area.toFixed(2)}.`)
  })
})()