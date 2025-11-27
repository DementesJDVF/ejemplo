from POO.mascota import Mascota

class Tortuga(Mascota):
    def __init__(self, nombre, raza, edad, caparazon):
        super().__init__(nombre, raza, edad)
        self.caparzon = caparazon
        
    def hacerSonido(self):
        print("aaaaaaaaa, hace la tortuga",self.getNombre())
        
    def presentar (self):
        print("Soy un tortuga de nombre: ", self.getNombre().upper(),
            "\nSoy de raza:", self.getRaza().upper(), 
            "\nTengo:", self.getEdad(), 
            "años de edad\nmi caparazon es:", self.caparzon)