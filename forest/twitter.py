#Import the necessary methods from tweepy library
from tweepy.streaming import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream
import json
tweets = []

#Variables that contains the user credentials to access Twitter API 
access_token = "958434177736740871-Zu1DYe88RpXruMDpJtHA2h1bCXodCdo"
access_token_secret = "zaCsZPH1y7Q0svdFAjbgOr0VruSUUQaHhA5cSRhRLCYoB"
consumer_key = "8zpPkup54geZPCOJvcAEMxA5D"
consumer_secret = "ZnlXSLHPZouvovxtUQkXlnz4kUlFTJ0bmxbYWJqnAYPtpzlQ8o"

#This is a basic listener that just prints received tweets to stdout.
class StdOutListener(StreamListener):
    save_file = open('text.json', 'a')

    def on_data(self, data):
        json_load = json.loads(data)
        texts = json_load['text']
        coded = texts.encode('utf-8')
        s = str(coded)
        #print(s[2:-1])
        data=[]
        data.append((s[2:-1]))
        with open('data.json', 'w') as json_data: # 'w' to open for writing
            json.dump(data, json_data)
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