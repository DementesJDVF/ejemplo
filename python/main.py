from POO.persona import Persona
from POO.automovil import Automovil
from POO.perro import Perro
from POO.tortuga import Tortuga
from POO.gato import Gato

auto1 = Automovil("rojo")
auto2 = Automovil("amarillo")
auto3 = Automovil("verde")

auto1.arrancar()
auto2.arrancar()
auto3.arrancar()

persona1 = Persona("JULIAN")
persona1.acciones()

perro1 = Perro("firulas", "pug", 3, "largo")
perro1.ladrar()
tortuga1 = Tortuga("dios", "tortuga", 10, "si")
tortuga1.comer()
gato1 = Gato("misifus", "gato", 10, "largo")
gato1.maullar()
print(perro1.tipoPelo)
