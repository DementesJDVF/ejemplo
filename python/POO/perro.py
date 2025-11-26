from POO.mascota import Mascota

class Perro(Mascota):
    def __init__(self, nombre, raza, edad, tipoPelo):
        super().__init__(nombre, raza, edad)
        self.tipoPelo = tipoPelo
        
    def ladrar(self):
        print("guaaaau guaaaau")