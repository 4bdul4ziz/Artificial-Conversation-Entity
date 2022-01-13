from faulthandler import disable
from tkinter import *
from turtle import bgcolor
from api.model.prediction import predict


from pyfiglet import Figlet
f = Figlet(font='doh')
title = f.renderText('H.A.D.E.S')

bg_gray = "#ABB2B9"
bg_color = "#17202A"
text_color = "#EAECEE"
font = "Roboto 14"
font_bold = "Roboto 13 bold"

class ChatApplication:

    def __init__(self):
        self.window = Tk()
        self._setup_main_window()


    def _setup_main_window(self):
        self.window.title("H.A.D.E.S")       
        self.window.resizable(width=False, height=False)
        self.window.configure(width=470, height=550, bg=bg_color)
        
        head_label = Label(self.window, bg=bg_color, fg=text_color, text="𝙼𝚊𝚍𝚎 𝚠𝚒𝚝𝚑 ☕️ & ❤️ 𝚋𝚢 𝚃𝚎𝚊𝚖 𝙷𝙰𝙳𝙴𝚂", font=font_bold, pady=10)
        head_label.place(relwidth=1)

        line = Label(self.window, width=450, bg=bg_gray)
        line.place(relwidth=1, rely=0.07, relheight=0.012)

        self.text_widget = Text(self.window, width=20, height=2, bg=bg_color, fg=text_color, font=font, padx=5, pady=5)
        self.text_widget.place(relheight=0.800, relwidth=1, rely=0.08)
        self.text_widget.configure(cursor="arrow", state=DISABLED)

        scrollbar = Scrollbar(self.text_widget)
        scrollbar.place(relheight=1, relx=0.970)
        scrollbar.configure(command=self.text_widget.yview)

        bottom_label = Label(self.window, bg=bg_gray, height=80)
        bottom_label.place(relwidth=1, rely=0.820)

        self.msg_entry = Entry(bottom_label, bg="#2C3E50", fg=text_color, font=font)
        self.msg_entry.place(relwidth=0.74, relheight=0.06, rely=0.008, relx=0.011)
        self.msg_entry.focus()
        self.msg_entry.bind("<Return>", self._on_enter_pressed)
    

        send_button = Button(bottom_label, text = "Send", font=font_bold, width=20, bg=bg_gray, command=lambda: self._on_enter_pressed(None))
        send_button.place(relx=0.80, rely=0.008, relheight=0.06, relwidth=0.22)






    def _on_enter_pressed(self, event):
        msg = self.msg_entry.get()
        self._insert_message(msg, "👤 You")

    def _insert_message(self, msg, sender):
        if not msg:
            return
        
        self.msg_entry.delete(0, END)
        message = f"{sender}: {msg}\n\n"
        self.text_widget.configure(state=NORMAL)
        self.text_widget.insert(END, message)
        self.text_widget.configure(state=DISABLED)

        messagebot = f"{predict(msg)}\n\n"
        self.text_widget.configure(state=NORMAL)
        self.text_widget.insert(END, messagebot)
        self.text_widget.configure(state=DISABLED)

        self.text_widget.see(END)
    

    def run(self):
        self.window.mainloop()


if __name__ == "__main__":
    app = ChatApplication()
    app.run()
