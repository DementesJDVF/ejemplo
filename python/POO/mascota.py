class Mascota:
    def __init__(self, nombre, raza, edad):
        self.__nombre = nombre
        self.__raza = raza
        self.__edad = edad

    def getNombre(self):
        return self.__nombre

    def setNombre(self, nombre):
        self.__nombre = nombre

    def getRaza(self):
        return self.__raza

    def setRaza(self, raza):
        self.__raza = raza

    def getEdad(self):
        return self.__edad

    def setEdad(self, edad):
        self.__edad = edad