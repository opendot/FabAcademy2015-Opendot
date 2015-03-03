# -*- coding: utf-8 -*-

'''
Created on 01/mar/2015
@author: satsha
'''

import rhinoscriptsyntax as rhino

#minimum line length
lineLength = 0.05

def recursiveFractal(curve):
    
    #stop condition of recursion
    if (rhino.CurveLength(curve)) > lineLength:
    
        #divide curve in 4 parts
        segments = rhino.DivideCurve(curve, 4)
        
        #draw construction line and rotate it
        newLine = rhino.RotateObject(rhino.AddLine(segments[1], segments[3]), segments[2], 90)
        
        #find end point of new line
        endsegments = rhino.CurveEndPoint(newLine)
        
        #clean
        rhino.DeleteObject(newLine)
        rhino.DeleteObject(curve)
        
        bufferCurves = []
        
        #draw new lines
        bufferCurves.append(rhino.AddLine(segments[0], segments[1]))
        bufferCurves.append(rhino.AddLine(segments[1], endsegments))
        bufferCurves.append(rhino.AddLine(endsegments, segments[3]))
        bufferCurves.append(rhino.AddLine(segments[3], segments[4]))
        
        #recursion on each line
        recursiveFractal(bufferCurves[0])
        recursiveFractal(bufferCurves[1])
        recursiveFractal(bufferCurves[2])
        recursiveFractal(bufferCurves[3])
    
def main():
    
    #take curves as input
    curveIds = rhino.GetObjects('curves to transform', rhino.filter.curve)
    
    #for each curve
    for i in range(len(curveIds)):
        recursiveFractal(curveIds[i])
    
if __name__ == '__main__':
    main()