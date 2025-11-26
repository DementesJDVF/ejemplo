from POO.mascota import Mascota

class Gato(Mascota):
    def __init__(self, nombre, raza, edad, tipoPelo):
        super().__init__(nombre, raza, edad)
        self.tipoPelo = tipoPelo
        
    def maullar(self):
        print("miauu miauuu")