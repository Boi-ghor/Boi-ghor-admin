import { CButton, CForm, CFormInput } from '@coreui/react';
import { Editor } from 'react-draft-wysiwyg'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { convertToRaw, EditorState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import React, { useState } from 'react';
import Select from 'react-select'
import { selectCustomStyles } from 'src/selectCustomStyles'
import { Controller, useForm } from 'react-hook-form';

const AddBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch
  } = useForm()

  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const onEditorState = (editorState) => setEditorState(editorState)

  const categoryOptions = [
    {
      label: "Programming",
      value: "Programming"
    },
    {
      label: "English",
      value: "English"
    }
  ]

  const onSubmit = async (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className='card-body'>
        <h4>Add Blog</h4>

        <CForm onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <CFormInput
                type="text"
                id="title"
                placeholder="Blog title"
                floatingLabel={<div style={{ color: '#808080' }}>Blog title</div>}
                {...register('title', { required: true })}
                className="mb-3"
              />
            </div>
            <div className="col-md-6">
              <CFormInput
                type="text"
                id="Tags"
                placeholder="Tags - Use comma seperator"
                floatingLabel={<div style={{ color: '#808080' }}>Tags - Use comma seperator</div>}
                {...register('tags', { required: true })}
                className=""
              />
            </div>
            <div className="col-md-6">
              <Controller
                control={control}
                name="CategoryID"
                render={({ field: { onChange, value, ref, name } }) => (
                  <Select
                    options={categoryOptions}
                    placeholder="Categories"
                    onChange={(option) => {
                      onChange(option)
                      setSelectedCategory(option)
                    }}
                    styles={selectCustomStyles}
                    isMulti
                  />
                )}
              />
            </div>
            <div className="col-md-6">
              <CFormInput
                type="file"
                accept="image/*"
                id="thumbnail"
                {...register('thumbnail', { required: true })}
                className="mb-3 form-control-lg rounded-0"
              />
            </div>
            <div className="col-md-12">

              <Editor
                editorState={editorState}
                rows={5}
                editorClassName="editor_container"
                placeholder="Description"
                onEditorStateChange={onEditorState}
                handlePastedText={() => true}
              />
            </div>
          </div>
          <CButton className="text-white mt-3" type="submit">
            Create
          </CButton>
        </CForm>
      </div>
    </div>
  );
};

export default AddBlog;
