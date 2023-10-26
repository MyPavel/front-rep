def search(list, platform):
   for i in range(len(list)):
       if list[i] == platform:
           return True
   return False

if __name__ == "__main__":
  streaming = ['netflix', 'hulu', 'disney+', 'appletv+']
  platform1 = 'netflix'
  platform2 = 'hulu'
  platform3 = 'yandex'

  print(f"Platform1 found: {search(streaming,platform1)}")
  print(f"Platform2 found: {search(streaming,platform2)}")
  print(f"Platform3 found: {search(streaming,platform3)}")