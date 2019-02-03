from kervi.plugin.message_bus.kervi_bus_plugin import KerviBusPlugin
from kervi.plugin.plugin_manager import PluginManager
from kervi.config import Configuration

class BusManager():
    def __init__(self):
        
        self._plugin_manager = None
        self._plugin_manager = PluginManager(Configuration, "message_bus", [KerviBusPlugin], load_silent=True)
        self._plugin_manager.load_managed_plugins()
        self._current_bus = None

    def load(self, process_id, spine_port, root_address = None, ip="127.0.0.1"):
        self._plugin_manager.load_managed_plugins()
        
        for plugin in self._plugin_manager.plugins:
            plugin.load(process_id, spine_port, root_address, ip)
            self._current_bus = plugin.bus
            break
        else:
            print("No message bus plugin found")

        if self._current_bus:
            import kervi.spine as spine
            spine.set_spine(self._current_bus)

    def stop(self):
        self._current_bus.stop()
    
    @property
    def bus(self):
        return self._current_bus