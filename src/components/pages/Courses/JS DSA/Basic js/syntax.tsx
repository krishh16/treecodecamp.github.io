import Terminal from '../../../Terminal/Terminal'
import { Instruction, syntaxHeader, syntaxTests, startCode } from './instruction'
export default function Syntax() {
  return (
    <div>
      <Terminal test={syntaxTests} instruction={Instruction} title={syntaxHeader} startingCode={startCode} />
    </div>
  )
}
