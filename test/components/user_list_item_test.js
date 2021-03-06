import React from "react"
import { shallow } from "enzyme"
import { expect } from "chai"

import UserListItem from "../../web/static/js/components/user_list_item"

describe("UserListItem", () => {
  describe("passed a non-facilitator user", () => {
    const user = {
      given_name: "dylan",
      online_at: 803,
      facilitator: false,
    }

    it("renders a list item that does not label the user a facilitator", () => {
      const wrapper = shallow(<UserListItem user={user} />)
      expect(wrapper.text()).to.match(/dylan$/i)
    })
  })

  describe("passed a facilitator user", () => {
    const user = {
      given_name: "treezy",
      online_at: 803,
      facilitator: true,
    }

    it("renders a list item with text labeling the user facilitator", () => {
      const wrapper = shallow(<UserListItem user={user} />)
      expect(wrapper.text()).to.match(/treezy \(facilitator\)/i)
    })
  })
})
