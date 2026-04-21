"use client";

import {CirclePlus} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField, ListBox, Select} from "@heroui/react";

export function WithForm({createPost}) {
  return (
    <Modal>
      <Button variant="secondary">Open Contact Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <CirclePlus className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Add a Task</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form action={createPost} className="flex flex-col gap-4">
                  <TextField className="w-full" name="title" type="text">
                    <Label>Title</Label>
                    <Input placeholder="Enter your Title" />
                  </TextField>
                  <TextField className="w-full" name="description" type="text">
                    <Label>Description</Label>
                    <Input placeholder="Enter your Description" />
                  </TextField>

                   <Select name="priority" className="w-[256px]" placeholder="Select one">
      <Label>Priority</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
                        <ListBox.Item  id="Low" textValue="Low">
            Low
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Medium" textValue="Medium">
            Medium
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="Heigh" textValue="Heigh">
            Heigh
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
                  </Select>
                  
                    <Select name="Status" className="w-[256px]" placeholder="Select one">
      <Label>Status</Label>
      <Select.Trigger>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover>
        <ListBox>
          <ListBox.Item id="completed" textValue="completed">
            Completed
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="in-progress" textValue="in-progress">
            In-Progress
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item id="pending" textValue="pending">
            Pending
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
                
                  <TextField className="w-full" name="assignTo">
                    <Label>AssignTo</Label>
                    <Input placeholder="Task Assigned To" />
                  </TextField>
                    <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit">Submit Task</Button>
            </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}