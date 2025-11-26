
class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    def banarse(self):
        print(self.nombre, "se baña")
        
    def alimentarse(self):
        print(self.nombre, "se alimenta")

    def subirBus(self):
        print(self.nombre, "se sube al bus")

    def acciones(self):
        self.banarse()
        self.alimentarse()
        self.subirBus()