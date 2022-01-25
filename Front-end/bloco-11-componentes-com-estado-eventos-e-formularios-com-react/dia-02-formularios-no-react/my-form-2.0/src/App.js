import './App.css';
import React, {Component} from 'react'

class App extends Component {

  constructor() {
    super()

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
    }

      this.retiraLetraEspecial = this.retiraLetraEspecial.bind(this)

      this.handleChange = this.handleChange.bind(this)

      this.verificaInicio = this.verificaInicio.bind(this)
    }

    retiraLetraEspecial({target}) {
      const escrito = target.value.replace(/[^a-zA-Zs]/g, "")
  
      this.setState({
        endereco: escrito
      })

    }

    handleChange ({target}) {
      const {name, value} = target
      this.setState({
        [name]: value
      })
    }

    verificaInicio({target}) {
      const {name, value} = target

      const analisaString = parseInt(value)

      if(!isNaN(analisaString)) {
        alert('Não é permitido numero no começo da cidade')
        this.setState({
          [name]: ''
        })
      }
    }

 render() {
  return (
    <main className="App">

      <form>

        <fieldset>

          <label>Nome:
            <input type="text" className='input-nome'  name="nome" maxLength='40' required>
            </input>
          </label>

          <label>Email:
            <input type="text" name="email" maxLength='50' required>
            </input>
          </label>

          <label>CPF:
            <input type="text" name="cpf" maxLength='11' required>
            </input>
          </label>

          <label>Endereço:
            <input value={this.state.endereco} onChange={this.handleChange} onKeyDown={this.retiraLetraEspecial} type="text" name="endereco" maxLength='200' required>
            </input>
          </label>

          <label>Cidade:
            <input value={this.state.cidade} onChange={this.handleChange} onBlur={this.verificaInicio} type="text"  name="cidade" maxLength='28' required>
            </input>
          </label>

          <label>Estado:
            <select>
              <option>

              </option>
            </select>
          </label>

          <label>casa:
            <input type="radio" name="casa" required>
            </input>
          </label>

          <label>apartamento:
            <input type="radio" name="casa" required>
            </input>
          </label>

        </fieldset>

      </form>

    </main>
  )
}
}

export default App;
