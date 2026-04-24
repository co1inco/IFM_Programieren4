"""
-----------------------------------------------------------------------------
Vorlesung: Bildverarbeitung und Mustererkennung (Sommersemseter 2026)
Thema: Aufgabenzettel 1
-----------------------------------------------------------------------------
"""

# nur die in den allgemeinen Richtlinien gegebenen Methoden dürfen verwendet werden - im Zweifel nachfragen.
import numpy as np
# nur die bereits im Code vorhandenen OpenCV-Methoden dürfen verwendet werden
import cv2
# für das Anzeigen des 1D Histogramms
from matplotlib import pyplot as plt



# Bild laden
image_color = cv2.imread('fahrbahn.jpg')
# Konvertierung in ein Grauwertbild
image_gray = cv2.cvtColor(image_color, cv2.COLOR_BGR2GRAY)
# weitere Methoden, die verwendet werden können
#image_tmp = image_gray.copy();
#rows,cols = image_gray.shape


# Bild anzeigen
# cv2.imshow("Bild", image_color)
# cv2.waitKey(0)
# cv2.destroyAllWindows()

# Bild speichern
#cv2.imwrite("output.jpg", image_gray)

def writeImage(file: str, data: list[list[int]], max = 255):
    """
    Write a image file in PPM format
    https://netpbm.sourceforge.net/doc/ppm.html
    """
    
    width = len(data[0]) / 3
    height = len(data)
    
    with open(file, "w") as f:
        f.write(f"P6 {int(width)} {int(height)} {max}\n")
        f.flush()
        for row in data:
            for cell in row:
                f.buffer.write(bytes([cell]))


# simple checkerboard test image
testImage: list[list[int]] = []
width = 500
height = 500

for y in range(0, height):
    testImage.append([])
    row = testImage[y];
    
    for x in range(0, width):
        black = True if ((int(x / 10) % 2) == 0) ^ ((int(y / 10) % 2) == 0) else False

        if black:
            row.extend([0, 0, 0])
        else:
            row.extend([255, 255, 255])
    
writeImage("test.ppm", testImage)

# so, in the grayscale image there is one byte for one pixel and not 3
writeImage("image_gray.ppm", image_gray)


# ------------------------------------------------------------------------
# (a) 1D Histogramm
# ------------------------------------------------------------------------
# 1. Implementieren Sie die Methode
# histogram = computeHistogram(image_gray)
# 2. Visualisieren Sie Ihr Ergebnis

def computeHistogramData_BW(image: cv2.typing.MatLike):
    
    values = [0] * 256
    
    for row in image_gray:
        for cell in row:
            values[cell] += 1
    
    m = max(values)
    
    # scale values to range of 0 - 1
    return list(map(lambda x: x / m, values))

def computeHistogram_BW(data: list[float]):
    
    image = [[0] * 256 * 3] * 256
    
    for y in range(0, 256):
        for x in range(0, 256):
            amount = data[x]
            
            if (y / 255.0) > amount:
                image[y][x*3 + 0] = 255
                image[y][x*3 + 1] = 255
                image[y][x*3 + 2] = 255
            else:
                image[y][x*3 + 0] = 0
                image[y][x*3 + 1] = 0
                image[y][x*3 + 2] = 0
        pass
            
    return image


histogram_bw = computeHistogram_BW(computeHistogramData_BW(image_gray))
writeImage("histogram_bw.ppm", histogram_bw)


# ------------------------------------------------------------------------
# (b) 2D Histogramm
# ------------------------------------------------------------------------
# 1. Implementieren Sie die Methode
# histogram2D = computeHistogram2D(image_color)
# 2. Visualisieren Sie Ihr Ergebnis


# ------------------------------------------------------------------------
# (c) Segmentierung
# ------------------------------------------------------------------------
# 1. Implementieren Sie die Methode
# segmentierung(histogram2D)
#  * Nutzen Sie für die Auswahl der Region im 2D Histogramm folgende OpenCV-Funktion: region=cv2.selectROI(histogram2D)
#  * Visualisieren Sie das Segmentierungsergebnis
