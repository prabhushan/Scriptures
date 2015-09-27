VERSION 1.0 CLASS
BEGIN
  MultiUse = -1  'True
END
Attribute VB_Name = "Sheet2"
Attribute VB_GlobalNameSpace = False
Attribute VB_Creatable = False
Attribute VB_PredeclaredId = True
Attribute VB_Exposed = True

Sub FilterTo1Criteria()
Dim criteria As Variant
With Sheet1

            
            .AutoFilterMode = False

            .Range("A1:D1").AutoFilter

            .Range("A1:D1").AutoFilter Field:=2, Criteria1:=Array("20640", "20575"), Operator:=xlFilterValues
            
            

    End With

    

End Sub
