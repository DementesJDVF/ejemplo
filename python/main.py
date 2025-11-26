from POO.persona import Persona
from POO.automovil import Automovil
from POO.perro import Perro

auto1 = Automovil("rojo")
auto2 = Automovil("amarillo")
auto3 = Automovil("verde")

auto1.arrancar()
auto2.arrancar()
auto3.arrancar()

persona1 = Persona("YOOOOOO")
persona1.acciones()

perro1 = Perro("firulas", "pug", 3, "largo")
perro1.ladrar()