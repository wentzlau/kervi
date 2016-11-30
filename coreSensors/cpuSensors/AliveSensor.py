# Copyright (c) 2016, Tim Wentzlau
# Licensed under MIT

""" CQRS handles in process communication """

from kervi.sensor import Sensor, SensorThread
import threading
import time

class AliveSensor (Sensor):
    def __init__(self ):
        Sensor.__init__(self, "AliveSensor", "Alive sensor")
        self.type = "counter"
        self.max = 1000000
        self.min = 0
        self.unit = ""
        self.storeSettings["active"] = False
        self.tick = 0
        
    def readSensor(self):
        self.tick+=1
        self.newSensorReading(self.tick)

t=SensorThread(AliveSensor())

t.start()