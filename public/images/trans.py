from PIL import Image

def trans(srcImage):
    img = Image.open(srcImage)
    img = img.convert("RGBA")
    datas = img.getdata()
    newData = list()
    for item in datas:
        if item[:3] == (255,249,129):
            newData.append((255,255,255, 0))
        else:
            newData.append(item)
    
    img.putdata(newData)
    img.save("miooi.png", "png")



if __name__ == "__main__":
    trans("./mio.jpg")