from flask import Flask, render_template

app = Flask('Personal Portfolio')

@app.route('/')
@app.route('/munyoki-job')
def index():
  return render_template('index.html')

@app.route('/resume')
def resume():
  return render_template('resume.html')

if __name__ == '__main__':
  app.run()