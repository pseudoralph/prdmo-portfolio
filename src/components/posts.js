/*eslint-disable */
import { v4 } from 'uuid';

export const POSTS = [
  {
    postId: 'INTRO',
    content: {
      title: `Sometimes words don't need to be more than what they are`,
      body: `<p>I've felt the urge to write a blog many times before. I'd get excited about a particular topic or subject and quickly find myself fevirshly mashing
        on the keyboard.</p>
        
        <p>Soon, however, self-doubt would creep in and I'd start questioning what I was writing. Was it good enough? Was it long enough? Why would anyone even want to read this?</p>

        <h3>Somewhere between a tweet and a blog exists vignettes</h3>

        <p>A vignette is an ephemeral post. It's meant to only exist for a few moments—and then it's gone.</p>
        
        <p>To read a vignette, you must interact with your computer by scrolling. The faster you scroll, the longer you can read a vignette.</p>
        <p>So go ahead and vignette, because sometimes words don't need to be more than a moment's enjoyment.`
    }
  },
  {
    postId: v4(),
    content: {
      title: `There's a hidden message here`,
      body: `<p>
        Some things are meant to be ephemeral. This is getting harder and
        harder to realize in our modern, digital age.
      </p>`
    }
  }
];

/*eslint-enable */
