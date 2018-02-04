#Import the necessary methods from tweepy library
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
import json
data_array=[]

#Variables that contains the user credentials to access Twitter API 
access_token = "958434177736740871-Zu1DYe88RpXruMDpJtHA2h1bCXodCdo"
access_token_secret = "zaCsZPH1y7Q0svdFAjbgOr0VruSUUQaHhA5cSRhRLCYoB"
consumer_key = "8zpPkup54geZPCOJvcAEMxA5D"
consumer_secret = "ZnlXSLHPZouvovxtUQkXlnz4kUlFTJ0bmxbYWJqnAYPtpzlQ8o"

page_template = """
<html>
<body id="data">
%s
</body>
</html>"""
 
def StringParse(string):
    s = str(string)
    length = len(s)
    return(length)
#This is a basic listener that just prints received tweets to stdout.

def Sort(length):
    if length <= 70:
        return("a0")
    elif length <= 90:
        return("a1")
    elif length <= 110:
        return("a2")
    elif length <= 130:
        return("a3")
    elif length <= 150:
        return("a4")
    elif length <= 170:
        return("a5")
    elif length <= 190:
        return("a6")
    else:
        return("a7")


class StdOutListener(StreamListener):
    #save_file = open('text.json', 'a')
    def on_data(self, data):
        json_load = json.loads(data)
        texts = json_load['text']
        coded = texts.encode('utf-8')
        coded_str = str(coded)
        s = (coded_str[2:-1])
        num = StringParse(s)
        fileNum = Sort(num)
        #print(s[2:-1])
        data_array.append(fileNum)
        #with open('data.json', 'a') as json_data: # 'w' to open for writing
         #   a = {'data': data}
          #  json.dump(a, json_data)
        #str_data=str(data_array)
        #new_html = page_template%(str_data)
        Html_file= open("data.txt","w")
        #Html_file.write(new_html)
        Html_file.write(str(data_array))
        Html_file.close()
        return True
    def on_error(self, status):
        print (status)

if __name__ == '__main__':

    #This handles Twitter authetification and the connection to Twitter Streaming API
    l = StdOutListener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    stream = Stream(auth, l)

    #This line filter Twitter Streams to capture data by the keywords: 'python', 'javascript', 'ruby'
    stream.filter(track=['birds', 'bird'])