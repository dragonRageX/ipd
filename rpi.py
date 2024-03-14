import serial
import time
import pynmea2
import requests
import subprocess

API_ENDPOINT = 'API_KEY'

def get_serial():
    result = subprocess.run(['cat', '/proc/cpuinfo'], stdout=subprocess.PIPE)
    output = result.stdout.decode()
    for line in output.split('\n'):
        if 'Serial' in line:
            serial = line.split(':')[-1].strip()
            return serial
    return None
id = get_serial()
def send_gps_data_to_api(lat, lng):
    data = {"lat": lat,"lon": lng,"id":id}

    try:
        response = requests.post(API_ENDPOINT, json=data)
        if response.status_code == 200:
            print("GPS data sent successfully to the API.")
        else:
            print(f"Failed to send GPS data to the API. Status code: {response.status_code}")
    except Exception as e:
        print(f"An error occurred while sending GPS data to the API: {e}")
        

while True:
    port = "/dev/ttyAMA0"
    try:
        ser = serial.Serial(port, baudrate=9600, timeout=1)
        print("Serial port opened successfully.")
        
        while True:
            try:
                newdata = ser.readline()
                if newdata:
                    try:
                        newmsg = pynmea2.parse(newdata.decode('ascii', errors='ignore'))
                        if isinstance(newmsg, pynmea2.RMC):
                            lat = newmsg.latitude
                            lng = newmsg.longitude

                            gps = f"Latitude={lat} and Longitude={lng}"
                            print(f"{gps},id:{id}")
                            
                            # Send data to API endpoint
                            send_gps_data_to_api(lat, lng)
                    except pynmea2.ParseError as e:
                        print(f"Error parsing NMEA sentence: {e}")
            except Exception as e:
                print(f"An error occurred: {e}")
    except serial.SerialException as e:
        print(f"Serial port error: {e}")