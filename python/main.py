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

persona1 = Persona("Julian")
persona1.acciones()

perro1 = Perro("firulas", "golden", 3, "largo")
print(("nombre actual:"),perro1.getNombre())
perro1.setNombre("max")
print(("nombre actualizado:"),perro1.getNombre())
print(("raza actual:"),perro1.getRaza())
perro1.setRaza("pug")
print(("raza actualizada:"),perro1.getRaza())
print(("edad actual:"),perro1.getEdad())
perro1.setEdad(5)
print(("edad actualizada:"),perro1.getEdad())
print(("pelo actual:"),perro1.tipoPelo)
perro1.tipoPelo=("corto")
print(("pelo actualizado:"),perro1.tipoPelo)
print("\n")
tortuga1 = Tortuga("zeus", "marina", 50, "blando")
print(("nombre actual:"),tortuga1.getNombre())
tortuga1.setNombre("poseidon")
print(("nombre actualizado:"),tortuga1.getNombre())
print(("raza actual:"),tortuga1.getRaza())
tortuga1.setRaza("terrestre")
print(("raza actualizada:"),tortuga1.getRaza())
print(("edad actual:"),tortuga1.getEdad())
tortuga1.setEdad(55)
print(("edad actualizada:"),tortuga1.getEdad())
print(("caparazon actual:"),tortuga1.caparzon)
tortuga1.caparzon=("blando")
print(("caparazon actualizado:"),tortuga1.caparzon)
print("\n")
gato1 = Gato("misifus", "egipcio", 10, "largo")
print(("nombre actual:"),gato1.getNombre())
gato1.setNombre("michi")
print(("nombre actualizado:"),gato1.getNombre())
print(("raza actual:"),gato1.getRaza())
gato1.setRaza("persa")
print(("raza actualizada:"),gato1.getRaza())
print(("edad actual:"),gato1.getEdad())
gato1.setEdad(5)
print(("edad actualizada:"),gato1.getEdad())
print(("pelo actual:"),gato1.tipoPelo)
gato1.tipoPelo=("corto")
print(("pelo actualizado:"),gato1.tipoPelo)
print("\n")
mascota = [
    perro1,
    tortuga1,
    gato1
]

for mascota in mascota:
    print("\n") 
    mascota.hacerSonido()
    mascota.presentar()