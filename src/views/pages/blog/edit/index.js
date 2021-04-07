import { useState, useEffect } from 'react'
import axios from 'axios'
import Select, { components } from 'react-select'
import Avatar from '@components/avatar'
import htmlToDraft from 'html-to-draftjs'
import { selectThemeColors } from '@utils'
import { Editor } from 'react-draft-wysiwyg'
import Breadcrumbs from '@components/breadcrumbs'
import { EditorState, ContentState } from 'draft-js'


import {
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  Media,
  Form,
  Label,
  Input,
  FormGroup,
  CustomInput,
  Button
} from 'reactstrap'

import '@styles/react/libs/editor/editor.scss'
import '@styles/base/plugins/forms/form-quill-editor.scss'
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/base/pages/page-blog.scss'

const BlogEdit = () => {
  const initialContent = `
  <p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p>
  <p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>
  `

  const contentBlock = htmlToDraft(initialContent)
  const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
  const editorState = EditorState.createWithContent(contentState)

  const [data, setData] = useState(''),
  [assignee, setAssignee] = useState({ value: 'pheobe', label: 'Pheobe Buffay' }),
    [title, setTitle] = useState(''),
    [slug, setSlug] = useState(''),
    [status, setStatus] = useState(''),
    [content, setContent] = useState(editorState),
    [blogCategories, setBlogCategories] = useState([]),
    [featuredImg, setFeaturedImg] = useState(null),
    [imgPath, setImgPath] = useState('banner.jpg')

    const assigneeOptions = [
      { value: 'pheobe', label: 'Pheobe Buffay'},
      { value: 'chandler', label: 'Chandler Bing'},
      { value: 'ross', label: 'Ross Geller'},
      { value: 'monica', label: 'Monica Geller'},
      { value: 'joey', label: 'Joey Tribbiani'},
      { value: 'Rachel', label: 'Rachel Green'}
    ]
    const AssigneeComponent = ({ data, ...props }) => {
      return (
        <components.Option {...props}>
          <Media className='align-items-center'>
            <Media body>
              <p className='mb-0'>{data.label}</p>
            </Media>
          </Media>
        </components.Option>
      )
    }

  useEffect(() => {
    axios.get('/blog/list/data/edit').then(res => {
      setData(res.data)
      setTitle(res.data.blogTitle)
      setSlug(res.data.slug)
      setBlogCategories(res.data.blogCategories)
      setFeaturedImg(res.data.featuredImage)
      setStatus(res.data.status)
    })
  }, [])

  const categories = [
    { value: 'science', label: 'Science' },
    { value: 'mathematics', label: 'Mathematics' },
    { value: 'english', label: 'English' },
    { value: 'sinhala', label: 'Sinhala' },
    { value: 'music', label: 'Music' }
  ]

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    setImgPath(files[0].name)
    reader.onload = function () {
      setFeaturedImg(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  return (
    <div className='blog-edit-wrapper'>
      <Breadcrumbs
        breadCrumbTitle='Assigning Subjects & Lessons'
        breadCrumbParent='Subject'
        breadCrumbActive='Assign'
      />
      {data !== null ? (
        <Row>
          <Col sm='12'>
            <Card>
              <CardBody>
                {/* <Media>
                  <Avatar className='mr-75' img={data.avatar} width='38' height='38' />
                  <Media body>
                    <h6 className='mb-25'>{data.userFullName}</h6>
                    <CardText>{data.createdTime}</CardText>
                  </Media>
                </Media> */}
                <h1 style={{fontSize: 22}}>Subjects</h1>
                <Form className='mt-2' onSubmit={e => e.preventDefault()}>
                  <Row>
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-title'>Teachers</Label>
                        {/* <Input id='blog-edit-title' value={title} onChange={e => setTitle(e.target.value)} /> */}
                        <Select
                          id='task-assignee'
                          className='react-select'
                          classNamePrefix='select'
                          isClearable={false}
                          options={assigneeOptions}
                          theme={selectThemeColors}
                          value={assignee}
                          onChange={data => setAssignee(data)}
                          components={{ Option: AssigneeComponent }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-category'>Subjects</Label>
                        <Select
                          // id='blog-edit-category'
                          // isClearable={false}
                          // theme={selectThemeColors}
                          // value={blogCategories}mathematics
                          // isMulti
                          // name='colors'
                          // options={categories}
                          // className='react-select'
                          // classNamePrefix='select'
                          // onChange={data => setBlogCategories(data)}
                          id='blog-edit-category'
                          isClearable={false}
                          theme={selectThemeColors}
                        
                          name='colors'
                          options={categories}
                          className='react-select'
                          classNamePrefix='select'
                          onChange={data => setBlogCategories(data)}
                        />
                      </FormGroup>
                    </Col>
                    {/* <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-slug'>Slug</Label>
                        <Input id='blog-edit-slug' value={slug} onChange={e => setSlug(e.target.value)} />
                      </FormGroup>
                    </Col>
                    <Col md='6'>
                      <FormGroup className='mb-2'>
                        <Label for='blog-edit-status'>Status</Label>
                        <Input
                          type='select'
                          id='blog-edit-status'
                          value={status}
                          onChange={e => setStatus(e.target.value)}
                        >
                          <option value='Published'>Published</option>
                          <option value='Pending'>Pending</option>
                          <option value='Draft'>Draft</option>
                        </Input>
                      </FormGroup>
                    </Col> */}
                    {/* <Col sm='12'>
                      <FormGroup className='mb-2'>
                        <Label>Content</Label>
                        <Editor editorState={content} onEditorStateChange={data => setContent(data)} />
                      </FormGroup>
                    </Col>
                    <Col className='mb-2' sm='12'>
                      <div className='border rounded p-2'>
                        <h4 className='mb-1'>Featured Image</h4>
                        <Media className='flex-column flex-md-row'>
                          <img
                            className='rounded mr-2 mb-1 mb-md-0'
                            src={featuredImg}
                            alt='featured img'
                            width='170'
                            height='110'
                          />
                          <Media body>
                            <small className='text-muted'>Required image resolution 800x400, image size 10mb.</small>

                            <p className='my-50'>
                              <a href='/' onClick={e => e.preventDefault()}>
                                {`C:/fakepath/${imgPath}`}
                              </a>
                            </p>
                            <div className='d-inline-block'>
                              <FormGroup className='mb-0'>
                                <CustomInput
                                  type='file'
                                  id='exampleCustomFileBrowser'
                                  name='customFile'
                                  onChange={onChange}
                                  accept='.jpg, .png, .gif'
                                />
                              </FormGroup>
                            </div>
                          </Media>
                        </Media>
                      </div>
                    </Col> */}
                    <Col className='mt-50'>
                      <Button.Ripple color='primary' className='mr-1'>
                        Save
                      </Button.Ripple>
                      <Button.Ripple color='secondary' outline>
                        Cancel
                      </Button.Ripple>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
            {/* --------------------------------------------------------- */}
          </Col>
        </Row>
        
      ) : null}
    </div>
    
  )
}

export default BlogEdit
