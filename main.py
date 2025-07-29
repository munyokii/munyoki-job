from flask import Flask, render_template

app = Flask('Personal Portfolio')

@app.route('/')
@app.route('/munyoki-job-resume')
def index():
    """File to render the home page."""
    return render_template('index.html')

@app.route('/resume')
def resume():
    """File to render the resume page."""
    return render_template('resume.html')

if __name__ == '__main__':
    app.run()
