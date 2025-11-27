from POO.mascota import Mascota

class Gato(Mascota):
    def __init__(self, nombre, raza, edad, tipoPelo):
        super().__init__(nombre, raza, edad)
        self.tipoPelo = tipoPelo
        
    def hacerSonido(self):
        print("miauu miauuu, hace el gato", self.getNombre())
        
    def presentar (self):
        print("Soy un gato de nombre: ", self.getNombre().upper(),
            "\nSoy de raza:", self.getRaza().upper(), 
            "\nTengo:", self.getEdad(), 
            "años de edad\nMi pelo es:", self.tipoPelo)