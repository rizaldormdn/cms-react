import Button from '../atoms/Button'
import Label from '../atoms/Label'
import RichTextEditor from '../atoms/RTE'
import AddIcon from '@mui/icons-material/Add';

const FormCreateArticle = () => {
    return (
        <div>
            <div >
                <Label label='Title' />
                <div className='flex'>
                <div className='w-full'>
                {/* <Input placeHolder='A journey to a great article title' /> */}
                </div>
            </div>
            <div>
                <RichTextEditor />
            </div>
            <div>
                <Label label='Tags' />
                <div className='flex gap-8 items-center'>
                    <div>
                        {/* <Input placeHolder='tutorial, reviev, ...' /> */}
                        <p>To enter multiple tags please use a coma (,)</p>
                    </div>
                    <div>
                        <div className='flex'>
                            <div className=''><Button action={(e) => { alert("Triggered"); }} title='Add File' buttonStyle='flex justify-start border rounded-lg pl-2 py-2 pr-[7rem]'/></div>
                            <div className='flex items-center text-secondaryalternativedark ml-[-25px]'><AddIcon/></div>
                        </div>
                        <p>Insert Featured Image</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center gap-5 p-5'>
                <div className='bg-purple-500 text-white text-base hover:bg-white hover:text-purple-500 rounded-lg border px-5 py-2'>
                    <Button title="SAVE DARFT" action={(e) => { alert("Triggered"); }} />
                </div>
                <div className='bg-white text-purple-500 text-base hover:bg-purple-500 hover:text-white border rounded-lg px-5 py-2'>
                    <Button title="PUBLISH" action={(e) => { alert("Triggered"); }} />
                </div>
            </div>
        </div>
        </div>
    )
}

export default FormCreateArticle