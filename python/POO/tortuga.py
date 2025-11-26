from POO.mascota import Mascota

class Tortuga(Mascota):
    def __init__(self, nombre, raza, edad, caparazon):
        super().__init__(nombre, raza, edad)
        self.caparzon = caparazon
        
    def comer(self):
        print("ñam ñam")