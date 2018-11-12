## Some cases to check js performance
I tried to reimplement the same behavior as withing three.js raytraycing.
They use closures as an optimization [here](https://github.com/mrdoob/three.js/blob/dev/src/math/Ray.js#L445)
and subVectors method is [here](https://github.com/mrdoob/three.js/blob/dev/src/math/Vector3.js#L188)
